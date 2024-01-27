import { createContext, useEffect, useState } from "react"

export const AppContext = createContext({})

export function AppContextProvider({children}){

    const [departureIata, setDepartureIata] = useState('')
    const [arrivalIata, setArrivalIata] = useState('')
    const [airlineIata, setAirlineIata] = useState('')

    const [validForm, setValidForm] = useState(false)

    const [flightsResults, setFlightsResults] = useState([])
    // const [flightCodeInfo, setFlightCodeInfo] = useState('')

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

    // console.log(departureIata !== '' && arrivalIata !== '' && airlineIata !== '')
    let valid = (departureIata !== '' && arrivalIata !== '' && airlineIata !== '')

    // this APIs gets
    // 1) data for all the flight with same departure, arrival and airline, there might be many results
    useEffect(() => {
        console.log(`first effect`)
        const fetchAirlabData = async () => {
            try {
                const response = await fetch('/api/airlab-data')
                const data = await response.json()
                setFlightsResults(data)
            } catch (error) {
            console.error('Error fetching data:', error)
            }
        }
        fetchAirlabData()
    }, [valid])

    useEffect(() => {
        console.log(`second effect`)
        // using a random flightcode while i wait for the api subscription
        let flightCodeTest = `EK242`

        async function fetchAeroDataBox() {
            try {
                const response = await fetch(`/api/aero-data-box?flightCode=${flightCodeTest}`)
                const result = await response.json()
                // setFlightCodeInfo(result)
            } catch (error) {
            console.error('Error fetching data:', error)
            }
        }
        fetchAeroDataBox()
    }, [flightsResults])

    let flightCodeInfo = (
        [
            {
              "aircraft": {
                "model": "W39",
                "reg": "PH-BXO"
              },
              "airline": {
                "name": "KLM"
              },
              "arrival": {
                "actualTimeLocal": "2020-03-28 14:29+01:00",
                "actualTimeUtc": "2020-03-28 13:29Z",
                "airport": {
                  "countryCode": "NL",
                  "iata": "AMS",
                  "icao": "EHAM",
                  "location": {
                    "lat": 52.3086,
                    "lon": 4.763889
                  },
                  "municipalityName": "Amsterdam",
                  "name": "Amsterdam, Amsterdam Schiphol",
                  "shortName": "Schiphol"
                },
                "baggageBelt": "11",
                "gate": "D66",
                "quality": [
                  "Basic",
                  "Live"
                ],
                "scheduledTimeLocal": "2020-03-28 14:10+01:00",
                "scheduledTimeUtc": "2020-03-28 13:10Z",
                "terminal": "2"
              },
              "callSign": "KLM1846",
              "codeshareStatus": "IsOperator",
              "departure": {
                "actualTimeLocal": "2020-03-28 13:05+01:00",
                "actualTimeUtc": "2020-03-28 12:05Z",
                "airport": {
                  "countryCode": "AT",
                  "iata": "VIE",
                  "icao": "LOWW",
                  "location": {
                    "lat": 48.1103,
                    "lon": 16.5697
                  },
                  "municipalityName": "Vienna",
                  "name": "Vienna, Schwechat",
                  "shortName": "Schwechat"
                },
                "checkInDesk": "301-318",
                "gate": "F12",
                "quality": [
                  "Basic",
                  "Live"
                ],
                "scheduledTimeLocal": "2020-03-28 12:15+01:00",
                "scheduledTimeUtc": "2020-03-28 11:15Z",
                "terminal": "T3"
              },
              "greatCircleDistance": {
                "feet": 3151404.2,
                "km": 960.548,
                "meter": 960548,
                "mile": 596.857,
                "nm": 518.654
              },
              "isCargo": false,
              "lastUpdatedUtc": "2020-03-29 19:26Z",
              "number": "KL 1846",
              "status": "Arrived"
            }
            // ,
            // {
            //   "aircraft": {
            //     "model": "Boeing 737-900 (winglets)",
            //     "reg": "PH-BXO"
            //   },
            //   "airline": {
            //     "name": "Xiamen"
            //   },
            //   "arrival": {
            //     "actualTimeLocal": "2020-03-28 14:29+01:00",
            //     "actualTimeUtc": "2020-03-28 13:29Z",
            //     "airport": {
            //       "countryCode": "NL",
            //       "iata": "AMS",
            //       "icao": "EHAM",
            //       "location": {
            //         "lat": 52.3086,
            //         "lon": 4.763889
            //       },
            //       "municipalityName": "Amsterdam",
            //       "name": "Amsterdam, Amsterdam Schiphol",
            //       "shortName": "Schiphol"
            //     },
            //     "baggageBelt": "11",
            //     "gate": "D66",
            //     "quality": [
            //       "Basic",
            //       "Live"
            //     ],
            //     "scheduledTimeLocal": "2020-03-28 14:10+01:00",
            //     "scheduledTimeUtc": "2020-03-28 13:10Z",
            //     "terminal": "2"
            //   },
            //   "codeshareStatus": "IsCodeshared",
            //   "departure": {
            //     "airport": {
            //       "icao": "LOWW",
            //       "name": "Vienna"
            //     },
            //     "quality": []
            //   },
            //   "isCargo": false,
            //   "lastUpdatedUtc": "2020-03-28 13:37Z",
            //   "number": "MF 9386",
            //   "status": "Arrived"
            // },
            // {
            //   "aircraft": {
            //     "model": "Boeing 737-900 (winglets)",
            //     "reg": "PH-BXO"
            //   },
            //   "airline": {
            //     "name": "Kenya Airways"
            //   },
            //   "arrival": {
            //     "actualTimeLocal": "2020-03-28 14:29+01:00",
            //     "actualTimeUtc": "2020-03-28 13:29Z",
            //     "airport": {
            //       "countryCode": "NL",
            //       "iata": "AMS",
            //       "icao": "EHAM",
            //       "location": {
            //         "lat": 52.3086,
            //         "lon": 4.763889
            //       },
            //       "municipalityName": "Amsterdam",
            //       "name": "Amsterdam, Amsterdam Schiphol",
            //       "shortName": "Schiphol"
            //     },
            //     "baggageBelt": "11",
            //     "gate": "D66",
            //     "quality": [
            //       "Basic",
            //       "Live"
            //     ],
            //     "scheduledTimeLocal": "2020-03-28 14:10+01:00",
            //     "scheduledTimeUtc": "2020-03-28 13:10Z",
            //     "terminal": "2"
            //   },
            //   "codeshareStatus": "IsCodeshared",
            //   "departure": {
            //     "airport": {
            //       "icao": "LOWW",
            //       "name": "Vienna"
            //     },
            //     "quality": []
            //   },
            //   "isCargo": false,
            //   "lastUpdatedUtc": "2020-03-28 13:37Z",
            //   "number": "KQ 1846",
            //   "status": "Arrived"
            // },
            // {
            //   "aircraft": {
            //     "model": "Boeing 737-900 (winglets)",
            //     "reg": "PH-BXO"
            //   },
            //   "airline": {
            //     "name": "Aeromexico"
            //   },
            //   "arrival": {
            //     "actualTimeLocal": "2020-03-28 14:29+01:00",
            //     "actualTimeUtc": "2020-03-28 13:29Z",
            //     "airport": {
            //       "countryCode": "NL",
            //       "iata": "AMS",
            //       "icao": "EHAM",
            //       "location": {
            //         "lat": 52.3086,
            //         "lon": 4.763889
            //       },
            //       "municipalityName": "Amsterdam",
            //       "name": "Amsterdam, Amsterdam Schiphol",
            //       "shortName": "Schiphol"
            //     },
            //     "baggageBelt": "11",
            //     "gate": "D66",
            //     "quality": [
            //       "Basic",
            //       "Live"
            //     ],
            //     "scheduledTimeLocal": "2020-03-28 14:10+01:00",
            //     "scheduledTimeUtc": "2020-03-28 13:10Z",
            //     "terminal": "2"
            //   },
            //   "codeshareStatus": "IsCodeshared",
            //   "departure": {
            //     "airport": {
            //       "icao": "LOWW",
            //       "name": "Vienna"
            //     },
            //     "quality": []
            //   },
            //   "isCargo": false,
            //   "lastUpdatedUtc": "2020-03-28 13:37Z",
            //   "number": "AM 6559",
            //   "status": "Arrived"
            // },
            // {
            //   "aircraft": {
            //     "model": "Boeing 737-900 (winglets)",
            //     "reg": "PH-BXO"
            //   },
            //   "airline": {
            //     "name": "China Southern"
            //   },
            //   "arrival": {
            //     "actualTimeLocal": "2020-03-28 14:29+01:00",
            //     "actualTimeUtc": "2020-03-28 13:29Z",
            //     "airport": {
            //       "countryCode": "NL",
            //       "iata": "AMS",
            //       "icao": "EHAM",
            //       "location": {
            //         "lat": 52.3086,
            //         "lon": 4.763889
            //       },
            //       "municipalityName": "Amsterdam",
            //       "name": "Amsterdam, Amsterdam Schiphol",
            //       "shortName": "Schiphol"
            //     },
            //     "baggageBelt": "11",
            //     "gate": "D66",
            //     "quality": [
            //       "Basic",
            //       "Live"
            //     ],
            //     "scheduledTimeLocal": "2020-03-28 14:10+01:00",
            //     "scheduledTimeUtc": "2020-03-28 13:10Z",
            //     "terminal": "2"
            //   },
            //   "codeshareStatus": "IsCodeshared",
            //   "departure": {
            //     "airport": {
            //       "icao": "LOWW",
            //       "name": "Vienna"
            //     },
            //     "quality": []
            //   },
            //   "isCargo": false,
            //   "lastUpdatedUtc": "2020-03-28 13:37Z",
            //   "number": "CZ 7977",
            //   "status": "Arrived"
            // },
            // {
            //   "aircraft": {
            //     "model": "Boeing 737-900 (winglets)",
            //     "reg": "PH-BXO"
            //   },
            //   "airline": {
            //     "name": "Garuda Indonesia"
            //   },
            //   "arrival": {
            //     "actualTimeLocal": "2020-03-28 14:29+01:00",
            //     "actualTimeUtc": "2020-03-28 13:29Z",
            //     "airport": {
            //       "countryCode": "NL",
            //       "iata": "AMS",
            //       "icao": "EHAM",
            //       "location": {
            //         "lat": 52.3086,
            //         "lon": 4.763889
            //       },
            //       "municipalityName": "Amsterdam",
            //       "name": "Amsterdam, Amsterdam Schiphol",
            //       "shortName": "Schiphol"
            //     },
            //     "baggageBelt": "11",
            //     "gate": "D66",
            //     "quality": [
            //       "Basic",
            //       "Live"
            //     ],
            //     "scheduledTimeLocal": "2020-03-28 14:10+01:00",
            //     "scheduledTimeUtc": "2020-03-28 13:10Z",
            //     "terminal": "2"
            //   },
            //   "codeshareStatus": "IsCodeshared",
            //   "departure": {
            //     "airport": {
            //       "icao": "LOWW",
            //       "name": "Vienna"
            //     },
            //     "quality": []
            //   },
            //   "isCargo": false,
            //   "lastUpdatedUtc": "2020-03-28 13:37Z",
            //   "number": "GA 9537",
            //   "status": "Arrived"
            // },
            // {
            //   "aircraft": {
            //     "model": "Boeing 737-900 (winglets)",
            //     "reg": "PH-BXO"
            //   },
            //   "airline": {
            //     "name": "Delta Air Lines"
            //   },
            //   "arrival": {
            //     "actualTimeLocal": "2020-03-28 14:29+01:00",
            //     "actualTimeUtc": "2020-03-28 13:29Z",
            //     "airport": {
            //       "countryCode": "NL",
            //       "iata": "AMS",
            //       "icao": "EHAM",
            //       "location": {
            //         "lat": 52.3086,
            //         "lon": 4.763889
            //       },
            //       "municipalityName": "Amsterdam",
            //       "name": "Amsterdam, Amsterdam Schiphol",
            //       "shortName": "Schiphol"
            //     },
            //     "baggageBelt": "11",
            //     "gate": "D66",
            //     "quality": [
            //       "Basic",
            //       "Live"
            //     ],
            //     "scheduledTimeLocal": "2020-03-28 14:10+01:00",
            //     "scheduledTimeUtc": "2020-03-28 13:10Z",
            //     "terminal": "2"
            //   },
            //   "codeshareStatus": "IsCodeshared",
            //   "departure": {
            //     "airport": {
            //       "icao": "LOWW",
            //       "name": "Vienna"
            //     },
            //     "quality": []
            //   },
            //   "isCargo": false,
            //   "lastUpdatedUtc": "2020-03-28 13:37Z",
            //   "number": "DL 9367",
            //   "status": "Arrived"
            // }
          ]
    )

    // 2) get that specific flight

    return (
        <AppContext.Provider value={{
                departureIata,
                arrivalIata,
                airlineIata,
                flightCodeInfo,
                getDepartureIata,
                getArrivalIata,
                getAirlineIata
            }}>
            {children}
        </AppContext.Provider>
    )
}