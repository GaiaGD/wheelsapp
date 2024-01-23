export default async function handler(req, res) {
  const { flightCode } = req.query;
  let rapidapiKey = process.env.API_KEY_RAPIDAPI

  const url = `https://aerodatabox.p.rapidapi.com/flights/number/${flightCode}?withAircraftImage=false&withLocation=false`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': rapidapiKey,
      'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options)
    const result = await response.text()
    res.status(response.status).send(result)
  } catch (error) {
    console.error(error)
  }

}
