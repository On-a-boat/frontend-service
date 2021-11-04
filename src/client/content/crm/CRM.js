import React, { useState, useEffect } from "react";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as s from "./CRM.styles";


export default function DataTable() {
  const [rows, setRows] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [open, setOpen] = React.useState(false);
  const [userId, setUserId] = useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);


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

  // // handle adding groups
  // const handleAddGroups = () => {
  //   const Ymd = (date) => date.toISOString().slice(0, 10);
  //   const selectedRows = localStorage.getItem("selected");

  //   console.log("button pressed");
  //   if (selectedRows) {
  //     axios
  //       .post("https://backend.weeyapp-crm-on-a-boat.com/group", {
  //         groupName: "random name fix this later",
  //         users: selectedRows,
  //         userCount: selectedRows.length,
  //         dateCreated: Ymd(new Date()),
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       });
  //   }
  // };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
          setRows(users.data);
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

  const makeGroup = () => {
    const Ymd = (date) => date.toISOString().slice(0, 10);
    const selectedRows = JSON.parse(localStorage.getItem("selected"));
    var updateId = [];
    console.log("button pressed");

    selectedRows.forEach((row) => {
      updateId.push(row.UserId);
    });
    setUserId(updateId);

    if (userId.length > 0 && groupName != "") {
      axios
        .post("https://backend.weeyapp-crm-on-a-boat.com/group", {
          groupName: groupName,
          users: userId,
          users: "" + userId,
          userCount: userId.length,
          dateCreated: new Date().toLocaleDateString(),
          dateCreated: Ymd(new Date()),
        })
        .then((response) => {
          console.log(response);
        });
    }
  };

  return (
    <div style={{ height: 630, width: "80%" }}>
      <s.CreateGroupModalButton variant="outlined" onClick={handleClickOpen}>
        + &ensp; Create New Group
      </s.CreateGroupModalButton>

      {/* popup */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>CREATE A NEW GROUP</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select users that you wish to include in your group, give it a name
            then click CREATE.
          </DialogContentText>
          <TextField
            value={groupName || ""}
            onChange={(e) => {
              setGroupName(e.target.value || "");
            }}
            autoFocus
            margin="dense"
            label="Enter group name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => makeGroup()}>Create</Button>
        </DialogActions>
      </Dialog>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        rowsPerPageOptions={[5]}
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRows = rows.filter((row) =>
            selectedIDs.has(row.id)
          );
          console.log(selectedRows);
          setSelectedRows(selectedRows);

        }}
        {...rows}



      />
      <pre style={{ fontSize: 10 }}>
        {JSON.stringify(selectedRows, null, 4)}
      </pre>



    </div>
  );
}


// <form onSubmit={handleAddGroups}>
//         <input
//           type="text"
//           placeholder="Enter Group Name"
//           name="gname"
//           required
//         />
//         <button>Add Groups</button>
//       </form>

