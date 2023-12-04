import Link from "next/link";
import Layout from "@/components/layout"
import Button from "@/components/button"
import FormInput from "@/components/formInput";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Input() {

    const [airports, setAirports] = useState([])
    const [airlines, setAirlines] = useState([])
    const [airportsDepartureMatches, setAirportsDepartureMatches] = useState([])
    const [airportsArrivalMatches, setAirportsArrivalMatches] = useState([])
    const [airlinesMatches, setAirlinesMatches] = useState([])
    
    const [showDropdown, setShowDropdown] = useState({showDropdownDep: false, showDropdownArr: false, showDropdownAirline: false})
    
    
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
        if(inputText === " "){
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
                        {/* <div style={{ width: 'calc(100% - 3rem)' }} className="mt-4 rounded-[20px] h-20 bg-white fixed p-1 backdrop-blur-md bg-white/70">

                        </div> */}
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