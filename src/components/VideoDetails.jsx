import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Stack, Box, Typography, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./index";
import ReactPlayer from "react-player";
const VideoDetails = () => {
  const videoId = useParams().id;
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetails(data.items[0])
    );

    fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`).then(
      (data) => setComments(data.items)
    );

    fetchFromAPI(
      `search?part=id,snippet&relatedToVideoId=${videoId}&type=video`
    ).then((data) => setVideos(data.items));
  }, [videoId]);
  
  useEffect(()=>{
    function handleResize() {
      if(window.innerWidth>768){
        setShowComments(true)
        console.log(window.innerWidth)
      }
       
    }
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => window.removeEventListener('resize', handleResize);
  },[])
  console.log(videoDetails);
  if (!videoDetails?.snippet || !videos) return "Loading";

  const {
    snippet,
    statistics: { likeCount, viewCount },
  } = videoDetails;
  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        height: { xs: "unset", md: "100vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "center" },
        flexDirection: { xs: "column", md: "row" },
      }}
      className="videoPlay"
    >
      <Box
        sx={{
          width: "100vw",
          height:{md:'100vh'},
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <ReactPlayer
          className="video"
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          sx={{ width: "100vw", height: "100vh" }}
        />

        <Box sx={{ width: { xs: "90vw", md: "60vw" }, marginTop: "1rem" }}>
          <Box>
            <Typography variant='h2'
            sx={{fontSize: { xs: "1.25rem", md: "2.25rem" }}}>
              {snippet.localized.title}
            </Typography>
            <br />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "baseline" },
              marginBlock: { xs: "0.75rem 2rem" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Link
                to={`/channel/${snippet?.channelId}`}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  className="channelTitle"
                  variant="h4"
                  sx={{ color: "#fff",
                  fontSize: { xs: "1rem", md: "2rem" } }}
                >
                  {snippet?.channelTitle}
                </Typography>
              </Link>
              <CheckCircle sx={{ fontSize: { xs: "1rem" } }} />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  fontWeight: "BOLD",
                  color: "#fff",
                  marginRight: "10px",
                }}
              >
                {parseInt(likeCount).toLocaleString("en-US")} Likes
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { xs: "10px", md: "16px" },
                  fontWeight: "BOLD",
                  color: "#fff",
                  marginRight: "10px",
                }}
              >
                {parseInt(viewCount).toLocaleString("en-US")} Views
              </Typography>
            </Box>
          </Box>
        </Box>

        {comments ? (
          <Box
            sx={{
              width: { xs: "90vw", md: "80%" },
              height:{md:'0vh'},
              marginBlock: { xs: "2rem", md: "5rem 0" },
              color: "#fff",
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{
                display: "flex",
                alignItems: { xs: "center",md:"unset" },
                flexDirection: "column",
                marginBottom:{xs:'0.5rem',md:'0.75rem'},
                fontSize:{xs:'1rem',md:'2rem'}
              }}
              onClick={() => setShowComments((prev) => !prev)}
            >
              Comments {window.innerWidth<768?"(Click to Show/Hide)":''}
            </Typography>
            <hr />
            {showComments &&
              comments.map((comment, key) => (
                <Box
                  sx={{ width: { xs: "90vw", md: "500px" }, display: "flex",
                 }}
                  key={key}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      padding: { xs: "0.5rem 0", md: "1rem" },
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <CardMedia
                      component="div"
                      image={
                        comment.snippet.topLevelComment.snippet
                          .authorProfileImageUrl
                      }
                      sx={{
                        padding: "1rem",
                        height: 30,
                        width: "30px",
                        borderRadius: "50%",
                      }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600 ,
                        fontSize:{xs:'.5rem',md:'1rem'}}}
                      >
                        {
                          comment.snippet.topLevelComment.snippet
                            .authorDisplayName
                        }
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        nowrap={false}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: { xs: "0.5rem",md:'1rem' },
                          maxWidth: "70vw !important",
                          overflowX: "hidden",
                        }}
                      >
                        {comment.snippet.topLevelComment.snippet.textOriginal}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              ))}
          </Box>
        ) : (
          <Box sx={{ width: "80%", marginTop: "5rem", color: "#fff" }}>
            <Typography variant="h4">
              No Comments Available
              <hr />
            </Typography>
          </Box>
        )}
      </Box>

      <Box sx={{ height:'100vh',alignItems: { xs: "center" } }}>
        <Videos videos={videos} direction="column" />
      </Box>
    </Stack>
  );
};

export default VideoDetails;
