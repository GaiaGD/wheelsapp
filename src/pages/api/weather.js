export default async function handler(req, res) {

    const { lat, lon } = req.query
    let weatherKey = process.env.API_KEY_WEATHERAPI
    console.log(lat, lon)
    // let airlabAPI = `https://airlabs.co/api/v9/flights?api_key=${airlabKey}&dep_iata=${departureIata}&arr_iata=${arrivalIata}&airline_iata=${airlineIata}`
    let weatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=imperial`
    console.log(weatherAPI)
    const response = await fetch(weatherAPI)
    const weatherData = await response.json()

    res.status(200).json({ weatherData })
  }

  // yes
  // https://api.openweathermap.org/data/2.5/onecall?lat=52.3086&lon=4.763889&appid=c9d1645108ea158910af690dc88c1d2e
  // no 
  // https://api.openweathermap.org/data/2.5/onecall?lat=48.1103lon=16.5697&appid=050325e00286f5aed36dc5fd183fa8d6&units=imperial