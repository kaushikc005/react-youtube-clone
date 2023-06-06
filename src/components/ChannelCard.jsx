import React from "react";
import { Typography, Box, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import {
  demoChannelTitle,
  demoProfilePicture,
} from "../utils/constants";
const ChannelCard = ({ channel,id, marginTop }) => {
  if (!id) return <></>
  return (
    <>
    {channel &&
    (<Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "300px",
        height: "320px",
        background: "transparent",
        marginRight: "10px",
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${id}`}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 0,
          }}
        >
            <CardMedia
              component="div"
              image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              sx={{ height: 180, width: "180px", borderRadius: "50%" }}
            />
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
            {channel?.snippet?.title.slice(0, 50) || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: "20px", color: "#fff", marginLeft: "10px" }}
            ></CheckCircle>
          </Typography>
          {channel?.statistics?.subscriberCount &&<Typography
            variant="subtitle2"
            sx={{
              display: "flex",
              color: "#fff",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            
             {parseInt(channel?.statistics?.subscriberCount).toLocaleString(
              "en-US"
            )}{"  "}Subscribers
            
          </Typography>}
        </CardContent>
      </Link>
    </Box>)}
    </>
  );
};

export default ChannelCard;
