import React, { useState, useEffect } from "react";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function DataTable() {
  const [data, setData] = useState([]);
  const [groupName, setGroupName] = useState("");

  // Table columns
  const columns = [
    { field: "id", headerName: "User ID", width: 140 },
    { field: "firstName", headerName: "First Name", width: 190 },
    { field: "lastName", headerName: "Last Name", width: 190 },
    { field: "age", headerName: "Age", width: 130 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "email", headerName: "Email", width: 360 },
    // {
    //   Header: "",
    //   accessor: "Link",
    //   Cell: (e) => <a href={"userprofile/" + e.value}>Link</a>,
    // },
  ];

  // handle adding groups
  const handleAddGroups = () => {
    const Ymd = (date) => date.toISOString().slice(0, 10);
    const selectedRows = localStorage.getItem("selected");

    console.log("button pressed");
    if (selectedRows) {
      axios
        .post("https://backend.weeyapp-crm-on-a-boat.com/group", {
          groupName: "random name fix this later",
          users: selectedRows,
          userCount: selectedRows.length,
          dateCreated: Ymd(new Date()),
        })
        .then((response) => {
          console.log(response);
        });
    }
  };

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

  return (
    <div style={{ height: 630, width: "80%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        rowsPerPageOptions={[5]}
        onSelectionModelChange={(newSelection) => {
          localStorage.setItem("selected", newSelection);
        }}
      />
      <form onSubmit={handleAddGroups}>
        <input
          type="text"
          placeholder="Enter Group Name"
          name="gname"
          required
        />
        <button>Add Groups</button>
      </form>
    </div>
  );
}
