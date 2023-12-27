//const baseUrl = "http://192.168.1.3:3000"
const baseUrl = "http://localhost:3000"

export const apiToFetchSentimentalAnalysis = async (payload) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };

  let res = await fetch(`${baseUrl}/hface`, requestOptions)
  return res.json()
}

export const apiToFetchOpenAIAnalysis = async (payload) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };

  let res = await fetch(`${baseUrl}/analyze`, requestOptions)
  return res.json()
}

export const apiToFetchDemographicData = async (payload) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };

  let res = await fetch(`${baseUrl}/audience`, requestOptions)
  return res.json()
}

export const apiToGenerateProfile = async (payload, errHandler) => {
 try {
   const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };

  let res = await fetch(`${baseUrl}/insta-api/generate`, requestOptions)
  return res.json()
 } catch(e) {
  console.log(e)
  errHandler()
 }
}