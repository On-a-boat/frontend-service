import React from "react";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import * as s from "./Home.style";

import PersonIcon from "./person.png";
import GroupIcon from "./group.png";
import StatIcon from "./stat.png";

export default function Statistics() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const history = useHistory();
  return (
    <s.RightContainer>
      <s.MainContainer>
        <h1>Home page</h1>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <Item>
              <h1>Welcome to WEEY CRM</h1>{" "}
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <h1>Users</h1> <img src={PersonIcon} alt="Person" />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgba(255, 127, 80, 0.2)",
                  color: "rgba(238,61,13,1)",
                }}
                onClick={() => {
                  history.push("/users");
                }}
              >
                Go to Users
              </Button>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <h1>Groups</h1> <img src={GroupIcon} alt="GroupIcon" />
              <Button
                style={{
                  backgroundColor: "rgba(255, 127, 80, 0.2)",
                  color: "rgba(238,61,13,1)",
                }}
                variant="contained"
                onClick={() => {
                  history.push("/groups");
                }}
              >
                Go to Groups
              </Button>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <h1>Statistics</h1> <img src={StatIcon} alt="StatIcon" />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgba(255, 127, 80, 0.2)",
                  color: "rgba(238,61,13,1)",
                }}
                onClick={() => {
                  history.push("/statistics/users");
                }}
              >
                Go to Statistics
              </Button>
            </Item>
          </Box>
        </Box>
      </s.MainContainer>
    </s.RightContainer>
  );
}
