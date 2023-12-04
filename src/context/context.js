import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({})

export function AppContextProvider({children}){


    const [departureIata, setDepartureIata] = useState('')

    function getDepartureIata(iataCode){
        setDepartureIata(iataCode)
    }

    console.log(departureIata)


    return (
        <AppContext.Provider value={{getDepartureIata}}>
            {children}
        </AppContext.Provider>
    )
}