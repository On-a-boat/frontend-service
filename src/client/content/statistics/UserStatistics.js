import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MyBar from "./diagrams/MyBar";
import Age from "./diagrams/Age";

import * as s from "./Statistics.styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Statistics = () => {
  const [newUser, setNewUser] = useState({ newuser: "5" });
  const [allUser, setAllUser] = useState([{ "count(userId)": 100 }]);
  const [openedEmail, setOpenedEmail] = useState([{ "SUM(NumberOpened)": 0 }]);
  const [allGender, setAllGender] = useState([
    { male_count: 0, female_count: 0 },
  ]);
  const [allAge, setAllAge] = useState([
    {
      "Under 20": 0,
      "20 - 29": 0,
      "30 - 39": 0,
      "40 - 49": 0,
      "50 - 60": 0,
    },
  ]);
  // Fetch users data from the Database.
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const newUsers = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/newUser"
        );
        const users = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/allUser"
        );
        const openedEmail = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/allOpen"
        );
        const gender = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/allGender"
        );
        const age = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/allAge"
        );

        setAllUser(users.data);
        setOpenedEmail(openedEmail.data);
        setAllGender(gender.data);
        setAllAge(age.data);
        setNewUser(newUsers.data);
        console.log(newUsers.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserInfo();
  }, []);
  return (
    <s.RightContainer>
      <s.MainContainer>
        <h1>User Statistics </h1>
        <br />
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 4">
              <Item>
                <h3>New Users</h3>
                <h1>{JSON.stringify(newUser["newuser"])}</h1>
              </Item>
            </Box>
            <Box gridColumn="span 4">
              <Item>
                <h3>Total Users</h3>
                <h1>{JSON.stringify(allUser[0]["count(userId)"])}</h1>
              </Item>
            </Box>
            <Box gridColumn="span 4">
              <Item>
                <h3>Emails Opened</h3>
                <h1>{JSON.stringify(openedEmail[0]["SUM(NumberOpened)"])}</h1>
              </Item>
            </Box>
            <Box gridColumn="span 6">
              <Item>
                <h3>Age Distribution</h3>
                <Age
                  data={[
                    allAge[0]["Under 20"],
                    allAge[0]["20 - 29"],
                    allAge[0]["30 - 39"],
                    allAge[0]["40 - 49"],
                    allAge[0]["50 - 60"],
                  ]}
                />
                {JSON.stringify(allAge[0])}
              </Item>
            </Box>
            <Box gridColumn="span 6">
              <Item>
                <h3>Gender Distribution</h3>
                <MyBar
                  data={[allGender[0].male_count, allGender[0].female_count]}
                />
              </Item>
            </Box>
          </Box>
        </Box>
      </s.MainContainer>
    </s.RightContainer>
  );
};

export default Statistics;
