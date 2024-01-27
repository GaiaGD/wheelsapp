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