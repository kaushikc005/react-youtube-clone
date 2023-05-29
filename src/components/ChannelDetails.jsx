import { Stack,Box, Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {ChannelCard, Videos} from './index';
const ChannelDetails = () => {
  
  const channelId=useParams().id;
  const [channelDetail,setChannelDetail]=useState([]);
  const [videos,setVideos]=useState([]);
  console.log(channelId)
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${channelId}`)
    .then((data) => setChannelDetail(data.items[0]));

    fetchFromAPI(`search?part=id,snippet&channelId=${channelId}&order=date`)
    .then((data) => setVideos(data.items))
     
  },[channelId])
    
  console.log(channelDetail)
  if(!channelDetail || !videos)
  return('Loading')
  
  // const {snippet,statistics:{subscriberCount
  //    ,videoCount}}=channelDetails;
  return (
    <Stack>
           <Box>
          <div style={{background: 'rgb(87,99,101)',background: 'linear-gradient(90deg, rgba(87,99,101,1) 0%, rgba(226,45,100,1) 35%, rgba(227,225,46,1) 100%)',height:'34vh'}}></div>  
          <Box  sx={{display:'flex',alignItems:'center',justifyContent:'center'}} >
            <ChannelCard channel={channelDetail} marginTop='-120px'/> 
          </Box>
                    
         </Box>
         <Box>
             <Videos videos={videos} direction='row' />
          </Box>
    </Stack>       
  )
}

export default ChannelDetails