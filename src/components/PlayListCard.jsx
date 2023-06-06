import React, { useEffect, useState } from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

import {
  demoChannelTitle,
  demoVideoTitle,
  demoVideoId,
  demoChannelId,
  demoProfilePicture,
} from "../utils/constants";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const PlayListCard= ({ playlist,id, marginTop }) => {
  
 const [playListVideos,setPlayListVideos]=useState([])
 useEffect(()=>{
    fetchFromAPI(`playlistItems?part=snippet&playlistId=${id}`)
    .then((data) => {console.log(data) 
        setPlayListVideos(data.items)})
 },[id])

  return (
    <>
    
    {playListVideos &&
    <Card
      sx={{
        width: "300px",
        height: "320px",
        background: "#1e1e1e",
        marginRight: "10px",
        display:"flex",
        flexDirection:"column"
      }}

    >
      <Link to={`/video/${playListVideos[0]?.snippet?.resourceId?.videoId || demoVideoId}`}>
        <CardMedia
          image={playlist?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          sx={{ height: 180, width: "100%" }}
        />
      </Link>
      <CardContent>
        <Link to={`/video/${playListVideos[0]?.snippet?.resourceId?.videoId || demoVideoId}`}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: "600" }}
          >
            {playListVideos[0]?.snippet?.title.slice(0, 50) || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={`/channel/${playListVideos[0]?.snippet?.channelId||demoChannelId}`}>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              color: "#fff",
              marginTop: "1rem",
              alignItems: "center",
              fontWeight: "800",
            }}
          >
            {playlist?.snippet?.title.slice(0, 50) || demoChannelTitle} Playlist
          </Typography>
        </Link>
      </CardContent>
    </Card>}
    </>
  );
};

export default PlayListCard;
