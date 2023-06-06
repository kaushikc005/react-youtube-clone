import { Stack, Box } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard, PlayListCard } from "./index";

const Videos = ({ videos, direction }) => {
  console.log(videos)
  return (
    <Stack
      direction={direction}
      sx={{
        display: "flex",
        justifyContent: {xs:"center",md:"start"},
        flexWrap: "wrap",
        width: "fit-content",
        height: "fit-content",
        gap: "1rem",
        
        marginLeft: {md:"5%"},
        marginRight: direction === "column" ? {xs:"0",md:"5rem"}: "0",
      }}
    >
      {videos.map((video, key) => (
        <Box sx={{ width: "300px" }} key={key}>
          {video?.id?.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channel={video} id={video?.id?.channelId} />}
          {video.id.playlistId  && <PlayListCard playlist={video} id={video?.id?.playlistId} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
