import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoVideoTitle,
  demoVideoId,
  demoChannelId,
  demoThumbnailUrl,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  const snippet = video.snippet;
  const videoid = video.id.videoId;
  if(!videoid){
    document.getElementsByClassName("videocard").style.display="none"   

  }
  return (
    <Card
      sx={{
        width: "300px",
        height: "320px",
        background: "#1e1e1e",
        marginRight: "10px",
      }}
      className="videocard"
    >
      <Link to={`/video/${videoid?videoid:demoVideoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          sx={{ height: 180, width: "100%" }}
        />
      </Link>
      <CardContent>
        <Link to={`/video/${videoid?videoid:demoVideoId}`}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: "600" }}
          >
            {video?.snippet?.title.slice(0, 50) || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId||demoChannelId}`}>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              color: "#fff",
              marginTop: "1rem",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            {snippet?.channelTitle.slice(0, 50) || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: "20px", color: "#fff", marginLeft: "10px" }}
            ></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
