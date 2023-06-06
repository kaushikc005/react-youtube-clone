import { Stack,Box } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {ChannelCard, Videos} from './index';


const ChannelDetails = () => {
  
  const {id}=useParams();
  const [channelDetail,setChannelDetail]=useState([]);
  const [videos,setVideos]=useState([]);
  console.log(id)
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data.items[0]));

    fetchFromAPI(`search?part=id,snippet&channelId=${id}&order=date`)
    .then((data) => setVideos(data.items))
     
  },[id])
    
  console.log(channelDetail)
  if(!channelDetail || !videos)
  return('Loading')
  
  return (
    <Stack>
           <Box>
          <div style={{background: 'linear-gradient(90deg, rgba(87,99,101,1) 0%, rgba(226,45,100,1) 35%, rgba(227,225,46,1) 100%)',height:'34vh'}}></div>  
          <Box  sx={{display:'flex',alignItems:'center',justifyContent:'center'}} >
            <ChannelCard channel={channelDetail} id={id} marginTop='-120px'/> 
          </Box>
                    
         </Box>
         <Box>
             <Videos videos={videos} direction='row' />
          </Box>
    </Stack>       
  )
}

export default ChannelDetails