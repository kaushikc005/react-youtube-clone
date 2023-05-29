import axios from 'axios';


 const BASE_URL= 'https://youtube-v31.p.rapidapi.com'
const options = {

  params:{
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '85a02d2badmshffac682784db2d3p11dec6jsn71ffdc942e01',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data
}