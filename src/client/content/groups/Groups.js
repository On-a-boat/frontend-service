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
import Link from "@material-ui/core/Link";
import * as s from "./Groups.styles";
import { useHistory } from "react-router-dom";

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [userId, setUserId] = useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);

  // Table columns
  const columns = [
    { field: "id", headerName: "Group ID", resizable: true, width: 130 },
    { field: "groupName", headerName: "Group Name", width: 190 },
    { field: "userCount", headerName: "User No.", width: 190 },
    { field: "dateCreated", headerName: "Created Date", width: 190 },
    { field: "emailSent", headerName: "Emails Sent", width: 190 },
    {
      field: "emailDestination",
      headerName: "Details",
      width: 150,
      renderCell: (params) => (
        <Link href={`/groups/${params.value}`}>Link</Link>
      ),
    },
  ];

  // send email to selected users
  const history = useHistory();
  const handleEmailSend = () => {
    localStorage.setItem("toId", [
      ...new Set(
        JSON.parse(localStorage.getItem("selectedRows")).map((a) => a.users)
      ),
    ]);
    history.push("/send");
  };

  // Fetch users data from the Database.
  useEffect(() => {
    let isMounted = true;
    const getUser = async () => {
      try {
        const users = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/group"
        );

        if (isMounted) {
          setRows(users.data);
        }
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
    <s.MainContainer>
      <s.CreateGroupModalButton variant="outlined" onClick={handleEmailSend}>
        Send Email
      </s.CreateGroupModalButton>

      <DataGrid
        style={{ backgroundColor: "white" }}
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        rowsPerPageOptions={[5]}
        // onSelectionModelChange={(ids) => {
        //   const selectedIDs = new Set(ids);
        //   const selectedRows = rows.filter((row) => selectedIDs.has(row.id));
        //   setSelectedRows(selectedRows);
        //   localStorage.setItem(
        //     "selected",
        //     JSON.stringify(selectedRows.map((e) => e.id))
        //   );
        // }}
        {...rows}
      />
    </s.MainContainer>
  );
}
