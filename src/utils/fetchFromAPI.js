import axios from 'axios';


 const BASE_URL= 'https://youtube-v31.p.rapidapi.com'
const options = {

  params:{
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '40747a52e2msh942db19fc6a2ea3p1ed9dbjsn9ffe3888e0a9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data
}