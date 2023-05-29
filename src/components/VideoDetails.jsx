import React, { useEffect,useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Stack,Box, Typography,CardMedia,CardContent } from '@mui/material'
import {CheckCircle} from '@mui/icons-material';
import {Videos} from './index';
import ReactPlayer  from 'react-player';
const VideoDetails = () => {

  const videoId=useParams().id;
  const [videoDetails,setVideoDetails]=useState(null);
  const [videos,setVideos]=useState(null);
  const [comments,setComments]=useState([])

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
    .then((data) => setVideoDetails(data.items[0]))
    
    fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`)
    .then((data) => setComments(data.items))

    fetchFromAPI(`search?part=id,snippet&relatedToVideoId=${videoId}&type=video`)
    .then((data) => setVideos(data.items))

    
     
  },[videoId])
  
  console.log(videoDetails)
  if(!videoDetails?.snippet || !videos)
  return('Loading')
  
  const {snippet,statistics:{likeCount
     ,viewCount}}=videoDetails;
  return (
    <Stack direction='row' sx={{width:'100%',height:'100vh',display:'flex',justifyContent:'center'}}>
      
      
      <Box sx={{width:'100vw',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',color:'#fff'}}>
        <ReactPlayer className="video" url={`https://www.youtube.com/watch?v=${videoId}`}  controls/>
         
        <Box sx={{width:'80%',marginTop:'1rem'}}>
           <Box>
           <Typography variant='h4'>
           {snippet.localized.title}
           </Typography><br/>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
             
              <Box sx={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
              <Link to={`/channel/${snippet?.channelId}`} sx={{display:'flex',alignItems:'center'}}>
              <Typography variant='h5' sx={{color:'#fff'}}>
                {snippet?.channelTitle}
               </Typography>
               </Link>
               <CheckCircle />
              </Box>
               

             
          
            <Box sx={{display:'flex'}}>
              <Typography variant='subtitle1' sx={{fontSize:'16px',fontWeight:'BOLD',color:'#fff',marginRight:'10px'}}>
                {parseInt(likeCount).toLocaleString('en-US')} Likes
              </Typography>
              <Typography variant='subtitle1' sx={{fontSize:'16px',fontWeight:'BOLD',color:'#fff',marginRight:'10px'}}>
                {parseInt(viewCount).toLocaleString('en-US')} Views
              </Typography>
            </Box>
          </Box>
           
        </Box>

            {comments ?<Box  sx={{width:'80%',marginTop:'5rem',color:'#fff'}}>
              <Typography variant='h4'>
                Comments<hr/>
              </Typography>
              {comments.map((comment,key)=> (
                <Box sx={{width:'500px',display:'flex'}} key={key}>
                  <CardContent sx={{display:'flex',alignItems:'center',gap:'1rem'}}>
                    <CardMedia component='div' image={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} sx={{padding:'1rem',height:30,width:'30px',borderRadius:'50%'}}/>
                  <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography variant='subtitle1' sx={{fontWeight:600}}>
                      {comment.snippet.topLevelComment.snippet.authorDisplayName}
                    </Typography>
                    <Typography variant='subtitle2' sx={{display:'flex',alignItems:'center',
                      justifyContent:'center'}} >
                      {comment.snippet.topLevelComment.snippet.textOriginal}
                    </Typography>
                  </Box>
                  </CardContent>
                  
                </Box>
              ))}
            </Box>:
            
            <Box  sx={{width:'80%',marginTop:'5rem',color:'#fff'}}>
              <Typography variant='h4'>
                No Comments Available<hr/>
              </Typography>
            </Box>
            }

      </Box>

      <Box >
          <Videos videos={videos} direction='column'/>
      </Box>

    </Stack>
  )
}

export default VideoDetails