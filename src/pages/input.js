import { useState, useEffect, useContext } from "react";
import { AppContext } from "@/context/context";
import Link from "next/link";
import Layout from "@/components/layout"
import Button from "@/components/button"
import FormInput from "@/components/formInput";
import axios from 'axios';

export default function Input() {
    const {getDepartureIata} = useContext(AppContext)

    const [airports, setAirports] = useState([])
    const [airlines, setAirlines] = useState([])
    const [airportsDepartureMatches, setAirportsDepartureMatches] = useState([])
    const [airportsArrivalMatches, setAirportsArrivalMatches] = useState([])
    const [airlinesMatches, setAirlinesMatches] = useState([])
        
    const changeInputDepValue = (selectedIata) => {
        let depInput = document.getElementById("form-dep-input")
        depInput.value = selectedIata
        setAirportsDepartureMatches([])
    }
    
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

    const searchDepartureAirports = (inputText) => {
        if(inputText === ""){
            setAirportsDepartureMatches([])
        } else {
            // filtering the results with filter and a regex
            let matches = airports.filter((airport) => {
                // RegExp accepts text to search and flags (g - global and i -case insensitive) as parameters
                const toFind = new RegExp(`${inputText}`, "gi")
                return airport.city.match(toFind) || airport.IATA.match(toFind) || airport.country.match(toFind)|| airport.name.match(toFind)
            })
            setAirportsDepartureMatches(matches)
        }
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
                        <input id="form-dep-input" onChange={(e) => searchDepartureAirports(e.target.value) } className="bg-off-white w-full focus:outline-none text-center" type="text" placeholder="departure airport" />
                        { airportsDepartureMatches.length >= 1 &&
                            
                            <div style={{ width: 'calc(100% - 3rem)' }} className="max-h-96 overflow-auto rounded-[20px] fixed bg-white backdrop-blur-md bg-white/80 shadow-2xl">
                                { airportsDepartureMatches.map((airport, index) => {
                                    if(charIsLetter(airport.IATA)){
                                        return (
                                            <div onClick={(e) => {getDepartureIata(airport.IATA), changeInputDepValue(airport.IATA), console.log(e)}} className="text-center font-light text-xs w-full p-1 border-b-[1px] py-4" key={index}> <p>{airport.city}</p>
                                                <p><span className="font-semibold">{airport.IATA}</span>, {airport.name}</p>
                                                <p>{airport.country}</p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        }
                    </FormInput>
                    
                    <FormInput>
                        <input id="form-arr-input" className="bg-off-white w-full focus:outline-none text-center" type="text" placeholder="arrival airport" />
                    </FormInput>
                    <FormInput>
                        <input id="form-airline-input" className="bg-off-white w-full focus:outline-none text-center" type="text" placeholder="airline" />
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