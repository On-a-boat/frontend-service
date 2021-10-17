import React, { useEffect, useState } from "react";
import axios from "axios";

const Statistics = () => {
  const [data, setData] = useState([]);
  // Fetch users data from the Database.
  useEffect(() => {
    let isMounted = true;
    const getUser = async () => {
      try {
        const users = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/statistics/allUser"
        );

        if (isMounted) {
          setData(users.data);
        }

        console.log(users);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
    return () => {
      isMounted = false;
    };
  }, []);
  return <h1> Email Statistics </h1>;
};

export default Statistics;
