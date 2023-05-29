import React from 'react'
import {Stack,Box,Typography,Card,CardMedia,CardContent} from '@mui/material'
import {CheckCircle} from '@mui/icons-material';
import { Link } from 'react-router-dom'

const VideoCard = ({video}) => {

  const snippet=video.snippet;
  const videoid=video.id.videoId;
  return (
    <Card sx={{width:'300px',height:'320px',background:'#1e1e1e',marginRight:'10px'}}>
      
      <Link to={`/video/${videoid}`}>
        <CardMedia image={video?.snippet?.thumbnails?.high?.url} sx={{height:180,width:'100%'}}/>
      </Link>
      <CardContent >
        <Link to={`/video/${videoid}`}>
            <Typography variant='subtitle1' sx={{color:'#fff',fontWeight:'600'}}>
                {video?.snippet?.title.slice(0,50)}
            </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
        
            <Typography variant='subtitle1' sx={{display:'flex',color:'#fff',marginTop:'1rem',alignItems:'center',fontWeight:'600'}}>
                {snippet?.channelTitle.slice(0,50)}
                <CheckCircle sx={{fontSize:'20px',color:'#fff',marginLeft:'10px'}}></CheckCircle>
            </Typography>
        </Link>
   
      </CardContent>

    </Card>
  )
}

export default VideoCard