import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MyBar from "./diagrams/MyBar";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Statistics = () => {
  const [allUser, setAllUser] = useState([]);
  const [openedEmail, setOpenedEmail] = useState([]);
  const [allGender, setAllGender] = useState([
    { male_count: 0, female_count: 0 },
  ]);
  const [allAge, setAllAge] = useState([]);
  // Fetch users data from the Database.
  useEffect(() => {
    let isMounted = true;
    const getUserInfo = async () => {
      try {
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

        if (isMounted) {
          setAllUser(users.data);
          setOpenedEmail(openedEmail.data);
          setAllGender(gender.data);
          setAllAge(age.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserInfo();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <h1>User Statistics </h1>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 8">
            <Item>
              <h3>Total Users</h3>
              <h1>{JSON.stringify(allUser[0])}</h1>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <h3>Emails Opened</h3>
              {JSON.stringify(openedEmail[0])}
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <h3>Gender Distribution</h3>
              <MyBar
                data={[allGender[0].male_count, allGender[0].female_count]}
              />
            </Item>
          </Box>
          <Box gridColumn="span 8">
            <Item>
              <h3>Age Distribution</h3>
              {JSON.stringify(allAge[0])}
            </Item>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Statistics;
