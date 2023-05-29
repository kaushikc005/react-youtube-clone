import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Navbar, Sidebar, Videos} from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {

  const {searchTerm}=useParams();
  console.log(searchTerm)
  const [videos,setVideos]=useState(null)
  

  useEffect(()=> {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
    
  },[searchTerm]);
   
  if(!videos)
   console.log("Loading....")

  
  return (
    <Stack direction='row'>
    
       <Box sx={{height:'95vh'}}>
       <Typography variant='h3' sx={{color:'#fff',marginLeft:'10px',fontWeight:'BOLD',
      marginLeft:'5%',marginBottom:'10px'}}>
        Search results for :
       <span style={{color:'#FC1503'}}> {searchTerm}</span>
       </Typography>
       {videos && <Videos videos={videos} direction='row'/>} 
       </Box>
    </Stack>
  )
}

export default SearchFeed