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
import { useHistory, useParams } from "react-router-dom";
export default function DataTable() {
  const { a } = useParams();
  const [rows, setRows] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [userId, setUserId] = useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);

  // Table columns
  const columns = [
    { field: "id", headerName: "User ID", width: 130 },
    { field: "firstName", headerName: "First Name", width: 190 },
    { field: "lastName", headerName: "Last Name", width: 190 },
    { field: "age", headerName: "Age", width: 150 },
    { field: "gender", headerName: "Gender", width: 150 },
    { field: "email", headerName: "Email", width: 320 },
    { field: "keyword", headerName: "Keywords", width: 320 },
    {
      field: "link",
      headerName: "Details",
      width: 150,
      renderCell: (params) => (
        <Link
          style={{ fontSize: "27px", marginLeft: "8px", color: "#F79489" }}
          href={`/userprofile/${params.value}`}
        >
          ⋮
        </Link>
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
          "https://backend.weeyapp-crm-on-a-boat.com/group/find?groupId=" + a
        );
        console.log(users.data);

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

// function GroupsDetail() {
//   const [data, setData] = useState([]);
//   const { a } = useParams();

//   // Fetch users data from the Database.
//   useEffect(() => {
//     let isMounted = true;
//     const getUser = async () => {
//       try {
//         const users = await axios.get(
//           "https://backend.weeyapp-crm-on-a-boat.com/group/find?groupId=" + a
//         );

//         if (isMounted) {
//           setData(users.data);
//         }

//         console.log(users);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getUser();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // Table columns
//   const columns = [
//     {
//       Header: "User ID",
//       accessor: "UserId",
//     },
//     {
//       Header: "First Name",
//       accessor: "FirstName",
//     },
//     {
//       Header: "Last Name",
//       accessor: "LastName",
//     },

//     {
//       Header: "Age",
//       accessor: "Age",
//       Filter: NumberRangeColumnFilter,
//       filter: "between",
//     },
//     {
//       Header: "Gender",
//       accessor: "Gender",
//     },
//     {
//       Header: "Email",
//       accessor: "Email",
//     },
//     // {
//     //   Header: "",
//     //   accessor: "Link",
//     //   Cell: (e) => <a href={"userprofile/" + e.value}>Link</a>,
//     // },
//   ];
