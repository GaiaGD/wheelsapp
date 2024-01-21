import { useState, useContext } from "react"
import { AppContext } from "@/context/context"
import Link from "next/link"
import Layout from "@/components/layout"
import Button from "@/components/button"
import FormInput from "@/components/formInput"
import DropdownWrap from "@/components/dropdownWrap"

export async function getServerSideProps(){

    const resAirports = await fetch('https://raw.githubusercontent.com/konsalex/Airport-Autocomplete-JS/master/src/data/airports.json')
    const airportData = await resAirports.json()

    const resAirlines = await fetch('https://raw.githubusercontent.com/npow/airline-codes/master/airlines.json')
    const airlineData = await resAirlines.json()

    return {
        props: {
            airportsProps: airportData,
            airlineProps: airlineData
        }
    }
}

export default function Input({airportsProps, airlineProps}) {
    const {departureIata, arrivalIata, airlineIata, getDepartureIata, getArrivalIata, getAirlineIata} = useContext(AppContext)

    const [airportsDepartureMatches, setAirportsDepartureMatches] = useState([])
    const [airportsArrivalMatches, setAirportsArrivalMatches] = useState([])
    const [airlinesMatches, setAirlinesMatches] = useState([])

    let clickable = departureIata !== '' && arrivalIata !== '' && airlineIata !== ''
    
    // {{ condition ? 'pointer-events-none bg-gray-400' : '' }}

    function getAirportsMatches(airportList, inputInTheForm){
        let results = airportList.filter((airport) => {
            // RegExp accepts text to search and flags (g - global and i -case insensitive) as parameters
            const toFind = new RegExp(`${inputInTheForm}`, "gi")
            return airport.city.match(toFind) || airport.IATA.match(toFind) || airport.country.match(toFind)|| airport.name.match(toFind)
        })
        return results
    }

    const searchDepartureAirports = (inputText) => {
        if(inputText === ""){
            setAirportsDepartureMatches([])
        } else {
            setAirportsDepartureMatches(getAirportsMatches(airportsProps, inputText))
        }
    }

    const searchArrivalAirports = (inputText) => {
        if(inputText === ""){
            setAirportsArrivalMatches([])
        } else {
            setAirportsArrivalMatches(getAirportsMatches(airportsProps, inputText))
        }
    }

    const searchAirline = (inputText) => {
        if(inputText === " "){
            setAirlinesMatches([])
        } else {
            // filtering the results with filter and a regex
            let matches = airlineProps.filter((airline) => {
                // RegExp accepts text to search and flags (g - global and i -case insensitive) as parameters
                const toFind = new RegExp(`${inputText}`, "gi")
                return airline.name.match(toFind) || airline.country.match(toFind) || airline.iata.match(toFind)
            })
            setAirlinesMatches(matches)

        }
    }

    const changeInputValue = (selectedIata, id) => {
        id.querySelector('input').value = selectedIata
    }

    // check if iata is valid
    let charIsLetter = (char) => {
        if (typeof char !== 'string') {
            return false;
        }
        return /^[a-zA-Z]+$/.test(char);
    }

    function handleDeparture (departureIata, relativeInput){
        getDepartureIata(departureIata)
        changeInputValue(departureIata, relativeInput)
        setAirportsDepartureMatches([])
    }

    function handleArrival (arrivalIata, relativeInput){
        getArrivalIata(arrivalIata)
        changeInputValue(arrivalIata, relativeInput)
        setAirportsArrivalMatches([])
    }

    // dropdown component
    function Dropdown ({airportProp, onClick, index}){
        return (
            <div onClick={onClick} index={index} className="text-center font-light text-xs w-full p-1 border-b-[1px] py-4">
                <p>{airportProp.city}</p>
                <p><span className="font-semibold">{airportProp.IATA}</span>, {airportProp.name}</p>
                <p>{airportProp.country}</p>
            </div>
        )
    }

    return (
        <Layout>
            <div className="p-6">

                <div className="">
                    <Link href={"/"}>
                        <img src="/wheels-app-logo.gif" alt="Window" className="max-h-20 mx-auto"/>        
                    </Link>
                </div>
                <div className="md:mx-20 md:mb-20 mb-12">

                    <FormInput>

                        <div className="idContainer" onChange={(e) => searchDepartureAirports(e.target.value)}>
                            <input id="form-dep-input" className="idContainer bg-off-white w-full focus:outline-none text-center" type="text" placeholder="departure airport" />
                            
                            <DropdownWrap props={airportsDepartureMatches} >
                                                                    
                                { airportsDepartureMatches.map((airport, index) => {
                                    if(charIsLetter(airport.IATA)){
                                        return (
                                            <>
                                                <Dropdown airportProp={airport} index={index} onClick={(e) => handleDeparture(airport.IATA, e.target.closest('.idContainer'))} />
                                            </>
                                        )
                                    }
                                })}
                                
                            </DropdownWrap>

                        </div>

                    </FormInput>
                    
                    <FormInput>

                        <div className="idContainer" onChange={(e) => searchArrivalAirports(e.target.value)}>
                            <input id="form-arr-input" className="idContainer bg-off-white w-full focus:outline-none text-center" type="text" placeholder="arrival airport" />
                            
                            <DropdownWrap props={airportsArrivalMatches} >
                                { airportsArrivalMatches.map((airport, index) => {
                                    if(charIsLetter(airport.IATA)){
                                        return (
                                            <>
                                                <Dropdown airportProp={airport} index={index} onClick={(e) => handleArrival(airport.IATA, e.target.closest('.idContainer'))} />
                                            </>
                                        )
                                    }
                                })}
                            </DropdownWrap>

                        </div>

                    </FormInput>

                    <FormInput>

                        <div className="idContainer" onChange={(e) => searchAirline(e.target.value)}>
                            <input id="form-arr-input" className="idContainer bg-off-white w-full focus:outline-none text-center" type="text" placeholder="airline" />
                            
                            <DropdownWrap props={airlinesMatches} >

                                { airlinesMatches.map((airline, index) => {
                                    if(charIsLetter(airline.iata)){
                                        return (
                                            <div onClick={(e) => {getAirlineIata(airline.iata), changeInputValue(airline.iata, e.target.closest('.idContainer')), setAirlinesMatches([])}} className="text-center font-light text-xs w-full p-1 border-b-[1px] py-4" key={index}>
                                                <p>{airline.name}</p>
                                                <p><span className="font-semibold">{airline.iata}</span></p>
                                                <p>{airline.country}</p>
                                            </div>
                                        )
                                    }
                                })}
                                
                            </DropdownWrap>

                        </div>

                    </FormInput>
                </div>

                <div className={`${ clickable ? '' : 'pointer-events-none opacity-25' }`}>
                    <Link href={"/dashboard"}>
                        <Button>
                                <p>Track this flight</p>
                        </Button>
                    </Link>

                </div>

                <div className="py-8 text-center">
                    <p>Need some inspiration?</p>
                    <p>See all the flights in the air right now on 
                        <a className="pl-2 font-semibold" target="_blank" href="https://www.google.com/search?q=flightradar">flightradar24.</a>
                    </p>
                </div>
            
            </div>

        </Layout>    
    )
}