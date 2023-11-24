import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

import { SocketContext } from "../SocketContext";

const GridContainerStyle = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

const PaperStyle = styled(Paper)(({ theme }) => ({
  padding: "10px",
  border: "2px solid black",
  margin: "10px",
}));

const VideoStyle = styled("video")(({ theme }) => ({
  width: "550px",
  [theme.breakpoints.down("xs")]: {
    width: "300px",
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <GridContainerStyle container>
      {/* Our own video */}
      {stream && (
        <PaperStyle>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <VideoStyle playsInline muted ref={myVideo} autoPlay />
          </Grid>
        </PaperStyle>
      )}

      {/* User's video */}
      {callAccepted && !callEnded && (
        <PaperStyle>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <VideoStyle playsInline ref={userVideo} autoPlay />
          </Grid>
        </PaperStyle>
      )}
    </GridContainerStyle>
  );
};

export default VideoPlayer;
