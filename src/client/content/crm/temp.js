
import React, { useState, useEffect } from "react";
import axios from "axios";

import { DataGrid } from '@mui/x-data-grid';

export default function DataTable() {
  const [data, setData] = useState([]);

   // Table columns
   const columns = [ { field: 'UserId', headerName: 'User ID', width: 170},
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

  const rows = [
    {id:0, UserId: 1, firstName: 'Jon', lastName: 'Snow', age: 35, gender: 'Male',email: 'sdoadsadias@gmail.com'},

    { id: 1, UserId: 55, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

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
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
