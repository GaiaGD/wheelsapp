import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({})

export function AppContextProvider({children}){


    const [departureIata, setDepartureIata] = useState('')
    const [arrivalIata, setArrivalIata] = useState('')
    const [airlineIata, setAirlineIata] = useState('')

    const [validForm, setValidForm] = useState(false)

    function getDepartureIata(iataCode){
        setDepartureIata(iataCode)
    }

    function getArrivalIata(iataCode){
        setArrivalIata(iataCode)
    }

    function getAirlineIata(iataCode){
        setAirlineIata(iataCode)
    }

    return (
        <AppContext.Provider value={{
                departureIata,
                arrivalIata,
                airlineIata,
                validForm,
                getDepartureIata,
                getArrivalIata,
                getAirlineIata
            }}>
            {children}
        </AppContext.Provider>
    )
}