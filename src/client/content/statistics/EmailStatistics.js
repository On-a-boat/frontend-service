import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MyBar from "./diagrams/MyBar";
import Age from "./diagrams/Age";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Email = () => {
  const { a } = useParams();
  const [oneOpened, setOneOpened] = useState([]);
  const [oneContent, setOneContent] = useState([]);
  const [oneSent, setOneSent] = useState([]);
  const [oneGender, setOneGender] = useState([
    { male_count: 0, female_count: 0 },
  ]);
  const [oneAge, setOneAge] = useState([
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
    let isMounted = true;
    const getUserInfo = async () => {
      try {
        const opened = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/email?emailId=" +
            a
        );
        const content = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/content?emailId=" +
            a
        );
        const sent = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/sent?emailId=" +
            a
        );
        const age = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/emailAge?emailId=" +
            a
        );
        const gender = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/emailGender?emailId=" +
            a
        );
        if (isMounted) {
          setOneOpened(opened.data);
          setOneContent(content.data);
          setOneSent(sent.data);
          setOneGender(gender.data);
          setOneAge(age.data);
        }
        console.log(opened.data);
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
      <h1>User Statistics on User {a}</h1>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 4">
            <Item>
              <h3>Sent To Users</h3>
              <h1>{JSON.stringify(oneSent)}</h1>
            </Item>
            <br />
            <Item>
              <h3>Opened Emails</h3>
              <h1>{JSON.stringify(oneOpened)}</h1>
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <h3>Gender Distribution</h3>
              <MyBar
                data={[oneGender[0].male_count, oneGender[0].female_count]}
              />
            </Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>
              <h3>Email Content</h3>
              {JSON.stringify(oneContent)}
            </Item>
          </Box>
          <Box gridColumn="span 8">
            <Item>
              <h3>Age Distribution</h3>
              <Age
                data={[
                  oneAge[0]["Under 20"],
                  oneAge[0]["20 - 29"],
                  oneAge[0]["30 - 39"],
                  oneAge[0]["40 - 49"],
                  oneAge[0]["50 - 60"],
                ]}
              />
              {JSON.stringify(oneAge)}
            </Item>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Email;
