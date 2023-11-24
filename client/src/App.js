import React from "react";
import { Typography, AppBar } from "@mui/material";
import { styled } from "@mui/system";

import VideoPlayer from "./components/VideoPlayer";
import Notification from "./components/Notifications";
import Options from "./components/Options";

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "600px",
  border: "2px solid black",

  [theme.breakpoints.down("xs")]: {
    width: "90%",
  },
}));

const WrapperStyle = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
}));

const App = () => {
  return (
    <WrapperStyle>
      <AppBarStyle position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBarStyle>
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>
    </WrapperStyle>
  );
};

export default App;
