export default async function handler(req, res) {

    const { departureIata, arrivalIata, airlineIata } = req.query
    let airlabKey = process.env.API_KEY_AIRLAB
  
    // let airlabAPI = `https://airlabs.co/api/v9/flights?api_key=${airlabKey}&dep_iata=${departureIata}&arr_iata=${arrivalIata}&airline_iata=${airlineIata}`
    let airlabAPI = `https://api.publicapis.org/entries`
    const response = await fetch(airlabAPI)
    const airlabData = await response.json()

    res.status(200).json({ airlabData })
  }
  

  // https://airlabs.co/api/v9/flights?api_key=9d11dcc9-f80f-4372-a34c-63357d1db729&dep_iata=svo&arr_iata=pek&airline_iata=ca
  // "9d11dcc9-f80f-4372-a34c-63357d1db729"