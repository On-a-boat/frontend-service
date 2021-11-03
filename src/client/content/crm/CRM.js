
import React, { useState, useEffect } from "react";
import axios from "axios";

import { DataGrid } from '@mui/x-data-grid';

export default function DataTable() {
  const [data, setData] = useState([]);

   // Table columns
   const columns = [ { field: 'id', headerName: 'User ID', width: 140},
   { field: 'firstName', headerName: 'First Name', width: 190},
   { field: 'lastName', headerName: 'Last Name', width: 190},
   { field: 'age', headerName: 'Age', width: 130},
   { field: 'gender', headerName: 'Gender', width: 130},
   { field: 'email', headerName: 'Email', width: 360},
    // {
    //   Header: "",
    //   accessor: "Link",
    //   Cell: (e) => <a href={"userprofile/" + e.value}>Link</a>,
    // },
  ];

   // Fetch users data from the Database.
   useEffect(() => {
    let isMounted = true;
    const getUser = async () => {
      try {
        const users = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/filter/show/"
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
  useEffect(() => {
    let isMounted = true;
    const getUser = async () => {
      try {
        const users = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/filter/show/"
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

  return (
    <div style={{ height: 630, width: '80%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

