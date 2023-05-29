import { Stack,Box } from '@mui/material'
import React from 'react'
import {VideoCard,ChannelCard} from './index'
const Videos = ({videos,direction}) => {
  return (
    <Stack direction={direction} sx={{display:'flex',justifyContent:'start',flexWrap:'wrap',width:'fit-content',height:'fit-content',gap:'1rem',marginLeft:'5%',marginRight:direction==='column'?'5rem':'0'}}
    >
        {
            videos.map((video,key)=> (
            <Box sx={{width:'300px'}} key={key}>
              {video?.id?.videoId && <VideoCard video={video} />}
              {video?.id?.channelId && <ChannelCard channel={video} />}
            </Box>
            
        ))}
    </Stack>
  )
}

export default Videos