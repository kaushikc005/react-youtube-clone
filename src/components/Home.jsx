import {React,useEffect,useState} from 'react'
import {Stack,Box,Typography} from '@mui/material'
import {Sidebar,Videos} from './index'
import {fetchFromAPI} from '../utils/fetchFromAPI';

const Home = ({selectedCategory,setSelectedCategory}) => {

  const [videos,setVideos]=useState([])
 
  useEffect(()=>{

     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) =>setVideos(data.items));
    
  },[selectedCategory])
  return (
    <Stack direction='row'>
       <Box sx={{borderRight:'1px solid #e2e2e2',maxWidth:'fit-content'}}>
         <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </Box>
    <Box sx={{height:'95vh'}}>
       <Typography variant='h3' sx={{color:'#fff',
       fontWeight:'BOLD',marginLeft:'4rem'}}>
       {selectedCategory}
       <span style={{color:'#FC1503'}}> Videos</span>
       </Typography>

       <Videos videos={videos} direction='row'/>
        
    </Box>
       
    </Stack>
  )
}

export default Home