import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";

import { SocketContext } from "../SocketContext";

const FormStyle = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const GridContainerStyle = styled(Grid)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

const ContainerStyle = styled(Container)(({ theme }) => ({
  width: "600px",
  margin: "35px 0",
  padding: 0,
  [theme.breakpoints.down("xs")]: {
    width: "80%",
  },
}));

const PaperStyle = styled(Paper)(({ theme }) => ({
  padding: "10px 20px",
  border: "2px solid black",
}));

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <ContainerStyle>
      <PaperStyle elevation={10}>
        <FormStyle noValidate autoComplete="off">
          <GridContainerStyle>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                padding: 20,
              }}
            >
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assignment fontSize="large" />}
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                padding: 20,
              }}
            >
              <Typography gutterBottom variant="h6">
                Make a call
              </Typography>
              <TextField
                label="ID to Call"
                fullWidth
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<PhoneDisabled fontSize="large" />}
                  onClick={leaveCall}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Phone fontSize="large" />}
                  onClick={() => callUser(idToCall)}
                ></Button>
              )}
            </Grid>
          </GridContainerStyle>
        </FormStyle>
        {children}
      </PaperStyle>
    </ContainerStyle>
  );
};

export default Options;
