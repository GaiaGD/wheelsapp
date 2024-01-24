import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({})

export function AppContextProvider({children}){

    const [departureIata, setDepartureIata] = useState('')
    const [arrivalIata, setArrivalIata] = useState('')
    const [airlineIata, setAirlineIata] = useState('')

    const [validForm, setValidForm] = useState(false)

    const [flightsResults, setFlightsResults] = useState([])
    const [flightCodeInfo, setFlightCodeInfo] = useState('')

    // from input:
    // get codes from departure, arrival airport & airline
    function getDepartureIata(iataCode){
        setDepartureIata(iataCode)
    }

    function getArrivalIata(iataCode){
        setArrivalIata(iataCode)
    }

    function getAirlineIata(iataCode){
        setAirlineIata(iataCode)
    }

    console.log(departureIata !== '' && arrivalIata !== '' && airlineIata !== '')
    let valid = (departureIata !== '' && arrivalIata !== '' && airlineIata !== '')
    console.log(valid)

    // this APIs gets
    // 1) data for all the flight with same departure, arrival and airline, there might be many results

    if(departureIata !== '' && arrivalIata !== '' && airlineIata !== ''){

        const fetchAirlabData = async () => {
            try {
              const response = await fetch('/api/airlab-data');
              const data = await response.json();
          
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchAirlabData()
        // // using a random flightcode while i wait for the api subscription
        let flightCodeTest = `UA57`

        async function fetchAeroDataBox() {
            try {
                const response = await fetch(`/api/aero-data-box?flightCode=${flightCodeTest}`);
                const result = await response.json()
                console.log(result)
            } catch (error) {
            console.error('Error fetching data:', error)
            }
        }
        fetchAeroDataBox()
    }
    console.log(flightCodeInfo)
    // 2) get that specific flight

    return (
        <AppContext.Provider value={{
                departureIata,
                arrivalIata,
                airlineIata,
                getDepartureIata,
                getArrivalIata,
                getAirlineIata
            }}>
            {children}
        </AppContext.Provider>
    )
}