import { useState, useEffect, useContext } from "react";
import { AppContext } from "@/context/context";
import Link from "next/link";
import Layout from "@/components/layout"
import Button from "@/components/button"
import FormInput from "@/components/formInput";
import axios from 'axios';

export default function Input() {
    const {getDepartureIata, getArrivalIata, getAirlineIata} = useContext(AppContext)

    const [airports, setAirports] = useState([])
    const [airlines, setAirlines] = useState([])
    const [airportsDepartureMatches, setAirportsDepartureMatches] = useState([])
    const [airportsArrivalMatches, setAirportsArrivalMatches] = useState([])
    const [airlinesMatches, setAirlinesMatches] = useState([])
    
    useEffect(() => {
        const loadAirports = async () => {
            const response = await axios.get('https://raw.githubusercontent.com/konsalex/Airport-Autocomplete-JS/master/src/data/airports.json')
            setAirports(response.data)
        }
        loadAirports()
    
        const loadAirlines = async () => {
            const response = await axios.get('https://raw.githubusercontent.com/npow/airline-codes/master/airlines.json')
            setAirlines(response.data)
        }
        loadAirlines()
    }, [])

    function getMatches(airportList, inputInTheForm){
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
            setAirportsDepartureMatches(getMatches(airports, inputText))
        }
    }

    const searchArrivalAirports = (inputText) => {
        if(inputText === ""){
            setAirportsArrivalMatches([])
        } else {
            setAirportsArrivalMatches(getMatches(airports, inputText))
        }
    }

    const searchAirline = (inputText) => {
        if(inputText === ""){
            setAirlinesMatches([])
        } else {
            setAirlinesMatches(getMatches(airlinesMatches, inputText))
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
                            
                            { airportsDepartureMatches.length >= 1 &&
                                
                                <div style={{ width: 'calc(100% - 3rem)' }} className="max-h-96 overflow-auto rounded-[20px] fixed bg-white backdrop-blur-md bg-white/80 shadow-2xl">
                                    { airportsDepartureMatches.map((airport, index) => {
                                        if(charIsLetter(airport.IATA)){
                                            return (
                                                <div onClick={(e) => {getDepartureIata(airport.IATA), changeInputValue(airport.IATA, e.target.closest('.idContainer')), setAirportsDepartureMatches([])}} className="text-center font-light text-xs w-full p-1 border-b-[1px] py-4" key={index}> <p>{airport.city}</p>
                                                    <p><span className="font-semibold">{airport.IATA}</span>, {airport.name}</p>
                                                    <p>{airport.country}</p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            }

                        </div>

                    </FormInput>
                    
                    <FormInput>

                        <div className="idContainer" onChange={(e) => searchArrivalAirports(e.target.value)}>
                            <input id="form-arr-input" className="idContainer bg-off-white w-full focus:outline-none text-center" type="text" placeholder="departure airport" />
                            
                            { airportsArrivalMatches.length >= 1 &&
                                
                                <div style={{ width: 'calc(100% - 3rem)' }} className="max-h-96 overflow-auto rounded-[20px] fixed bg-white backdrop-blur-md bg-white/80 shadow-2xl">
                                    { airportsArrivalMatches.map((airport, index) => {
                                        if(charIsLetter(airport.IATA)){
                                            return (
                                                <div onClick={(e) => {getArrivalIata(airport.IATA), changeInputValue(airport.IATA, e.target.closest('.idContainer')), setAirportsArrivalMatches([])}} className="text-center font-light text-xs w-full p-1 border-b-[1px] py-4" key={index}> <p>{airport.city}</p>
                                                    <p><span className="font-semibold">{airport.IATA}</span>, {airport.name}</p>
                                                    <p>{airport.country}</p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            }

                        </div>

                    </FormInput>

                    <FormInput>
                        {/* <input id="form-airline-input" className="bg-off-white w-full focus:outline-none text-center" type="text" placeholder="airline" /> */}

                        <div className="idContainer" onChange={(e) => searchAirline(e.target.value)}>
                            <input id="form-arr-input" className="idContainer bg-off-white w-full focus:outline-none text-center" type="text" placeholder="departure airport" />
                            
                            { airlinesMatches.length >= 1 &&
                                
                                <div style={{ width: 'calc(100% - 3rem)' }} className="max-h-96 overflow-auto rounded-[20px] fixed bg-white backdrop-blur-md bg-white/80 shadow-2xl">
                                    { airlinesMatches.map((airline, index) => {
                                        if(charIsLetter(airline.IATA)){
                                            return (
                                                <div onClick={(e) => {getAirlineIata(airline.IATA), changeInputValue(airline.IATA, e.target.closest('.idContainer')), setAirlinesMatches([])}} className="text-center font-light text-xs w-full p-1 border-b-[1px] py-4" key={index}> <p>test</p>
                                                    {/* <p><span className="font-semibold">{airport.IATA}</span>, {airport.name}</p>
                                                    <p>{airport.country}</p> */}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            }

                        </div>

                    </FormInput>
                </div>

                <Link href={"/dashboard"}>
                    <Button>
                        <p>Track this flight</p>
                    </Button>
                </Link>

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