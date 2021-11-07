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

// import React from "react";
// import { useState, useEffect, Fragment } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import {
//   useTable,
//   usePagination,
//   useRowSelect,
//   useSortBy,
//   useFilters,
//   useGlobalFilter,
//   useAsyncDebounce,
// } from "react-table";
// import DefaultColumnFilter from "../crm/filters/DefaultColumnFilter";
// import NumberRangeColumnFilter from "../crm/filters/NumberRangeColumnFilter";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

// import * as s from "./Groups.styles";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 800,
//   height: 500,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// // Copied from CRM.js
// //------------------------------------------------------------------------------------------------------------
// //toggle dropdown menu open/close filter and sort
// var toClose = false;
// function toggle(e) {
//   e.stopPropagation();
//   var btn = this;
//   var menu = btn.nextSibling;

//   while (menu && menu.nodeType !== 1) {
//     menu = menu.nextSibling;
//   }
//   if (!menu) return;
//   if (menu.style.display !== "block") {
//     menu.style.display = "block";
//     if (toClose) toClose.style.display = "none";
//     toClose = menu;
//   } else {
//     menu.style.display = "none";
//     toClose = false;
//   }
// }

// window.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll(".btn-buy-list").forEach(function (btn) {
//     btn.addEventListener("click", toggle, true);
//   });
// });

// //A checkbox for each row in the table
// const IndeterminateCheckbox = React.forwardRef(
//   ({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef();
//     const resolvedRef = ref || defaultRef;

//     React.useEffect(() => {
//       resolvedRef.current.indeterminate = indeterminate;
//     }, [resolvedRef, indeterminate]);

//     return (
//       <>
//         <input type="checkbox" ref={resolvedRef} {...rest} />
//       </>
//     );
//   }
// );

// // CRM table
// const Table = function ({ columns, data }) {
//   // Define filtering options; case insensitive
//   const filterTypes = React.useMemo(
//     () => ({
//       text: (rows, id, filterValue) => {
//         return rows.filter((row) => {
//           const rowValue = row.values[id];
//           return rowValue !== undefined
//             ? String(rowValue)
//                 .toLowerCase()
//                 .startsWith(String(filterValue).toLowerCase())
//             : true;
//         });
//       },
//     }),
//     []
//   );

//   // default filter for each column
//   const defaultColumn = React.useMemo(
//     () => ({
//       Filter: DefaultColumnFilter,
//     }),
//     []
//   );

//   // States and functions returned from useTable
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     selectedFlatRows,
//     state: { pageIndex },
//   } = useTable(
//     {
//       columns,
//       data,
//       defaultColumn,
//       filterTypes,
//     },
//     useFilters,
//     useSortBy,
//     usePagination,
//     useRowSelect,

//     // define functionalities for checkbox
//     (hooks) => {
//       hooks.visibleColumns.push((columns) => [
//         //  make a column for selection
//         {
//           id: "selection",
//           // The header can use the table's getToggleAllRowsSelectedProps method
//           // to render a checkbox
//           Header: ({ getToggleAllRowsSelectedProps }) => (
//             <div>
//               <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
//             </div>
//           ),
//           // The cell can use the individual row's getToggleRowSelectedProps method
//           // to the render a checkbox
//           Cell: ({ row }) => (
//             <div>
//               <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
//             </div>
//           ),
//         },
//         ...columns,
//       ]);
//     }
//   );

//   return (
//     <>
//       <s.Table {...getTableProps()}>
//         <s.TableHead>
//           {headerGroups.map((headerGroup) => (
//             <tr style={{ position: "relative" }}>
//               {headerGroup.headers.map((column) => (
//                 <th>
//                   {/* header */}
//                   <span>{column.render("Header")}</span>

//                   {/* drop down bar, contians filter and sort */}
//                   <span>
//                     {column.Header.length > 1 ? (
//                       <span>
//                         <s.HeadFilter style={{ display: "block" }}>
//                           {/* filter */}
//                           <li style={{ backgroundColor: "white" }}>
//                             {column.canFilter ? column.render("Filter") : null}
//                           </li>

//                           {/* sort */}
//                           <li
//                             {...column.getHeaderProps(
//                               column.getSortByToggleProps()
//                             )}
//                             style={{ backgroundColor: "white" }}
//                           >
//                             {column.Header.length > 1
//                               ? column.isSorted
//                                 ? column.isSortedDesc
//                                   ? "Default"
//                                   : "Sort in Desc"
//                                 : "Sort in Asc"
//                               : null}
//                           </li>
//                         </s.HeadFilter>
//                       </span>
//                     ) : null}
//                   </span>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </s.TableHead>

//         <s.TableBody {...getTableBodyProps()}>
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </s.TableBody>
//       </s.Table>

//       {/*  define pagination of the table,  */}
//       <s.Pagination>
//         <s.PaginationArrowButton
//           onClick={() => gotoPage(0)}
//           disabled={!canPreviousPage}
//         >
//           {"<<"}
//         </s.PaginationArrowButton>{" "}
//         <s.PaginationArrowButton
//           onClick={() => previousPage()}
//           disabled={!canPreviousPage}
//         >
//           {"<"}
//         </s.PaginationArrowButton>{" "}
//         <s.PaginationArrowButton
//           onClick={() => nextPage()}
//           disabled={!canNextPage}
//         >
//           {">"}
//         </s.PaginationArrowButton>{" "}
//         <s.PaginationArrowButton
//           onClick={() => gotoPage(pageCount - 1)}
//           disabled={!canNextPage}
//         >
//           {">>"}
//         </s.PaginationArrowButton>{" "}
//         <s.CurrPage>
//           Page {pageIndex + 1} of {pageOptions.length}{" "}
//         </s.CurrPage>
//       </s.Pagination>

//       {/* Create a JSON file for checked rows */}
//       <pre>
//         <code>
//           {localStorage.setItem(
//             "selectedRows",
//             JSON.stringify(selectedFlatRows.map((d) => d.original))
//           )}
//         </code>
//       </pre>
//     </>
//   );
// };
// //------------------------------------------------------------------------------------------------------------

// const Groups = () => {
//   const [data, setData] = useState([]);
//   const [buttonPopup, setButtonPopup] = useState(false);
//   const [email, setEmail] = useState("");
//   const handleClose = () => setButtonPopup(false);

// const history = useHistory();
// const handleEmailSend = () => {
//   localStorage.setItem("toId", [
//     ...new Set(
//       JSON.parse(localStorage.getItem("selectedRows")).map((a) => a.users)
//     ),
//   ]);
//   history.push("/send");
// };

//   const columns = React.useMemo(() => [
//     {
//       Header: "No.",
//       accessor: "GroupId",
//     },
//     {
//       Header: "Group Name",
//       accessor: "groupName",
//     },
//     {
//       Header: "Users",
//       accessor: "userCount",
//     },
//     {
//       Header: "Date Created",
//       accessor: "dateCreated",
//     },
//     {
//       Header: "Emails Sent",
//       accessor: "emailSent",
//     },
//     {
//       Header: "",
//       accessor: "link",
//       Cell: (e) => <a href={"groups/" + e.value}>Details</a>,
//     },
//   ]);

//   // Fetch groups from the Database.
//   useEffect(() => {
//     let isMounted = true;
//     const getGroup = async () => {
//       try {
//         const groups = await axios.get(
//           "https://backend.weeyapp-crm-on-a-boat.com/group"
//         );

//         if (isMounted) {
//           setData(groups.data);
//         }
//         console.log(groups);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getGroup();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   return (
//     <s.CRMContainer>
//       <s.MainContainer>
//         <s.CreateGroupModalButton variant="outlined" onClick={handleEmailSend}>
//           Send Email
//         </s.CreateGroupModalButton>
//         <s.TableStyles>
//           <Table columns={columns} data={data} />
//         </s.TableStyles>
//         <Modal
//           open={buttonPopup}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style} justifyContent="center" alignItems="center">
//             <Typography variant="h5"> Send Email</Typography>
//             <TextField
//               id="outlined-multiline-flexible"
//               label="Subject"
//               multiline
//               maxRows={2}
//               margin="normal"
//               fullWidth
//             />
//             <form>
//               <FormGroup>
//                 <FormControlLabel
//                   control={<Checkbox defaultChecked />}
//                   label="Add Voucher"
//                 />
//               </FormGroup>
//               <TextField
//                 id="outlined-multiline-static"
//                 rows={10}
//                 margin="normal"
//                 label="Enter the field below"
//                 multiline
//                 fullWidth
//                 required
//               />
//             </form>
//             <Button
//               onclick={handleClose}
//               type="submit"
//               color="secondary"
//               variants="contained"
//               size="large"
//             >
//               Submit
//             </Button>
//           </Box>
//         </Modal>
//         {/* <Popup trigger={buttonPopup}>
//         <input
//           value={email || ""}
//           onChange={(e) => {
//             setEmail(e.target.value || ""); // Set undefined to remove the filter entirely
//           }}
//           placeholder={"Enter email"}
//         />
//         <input
//           value={email || ""}
//           onChange={(e) => {
//             setEmail(e.target.value || ""); // Set undefined to remove the filter entirely
//           }}
//           placeholder={"Enter "}
//         />

//         {/* onClick, send email and update emails sent of table*/}
//         {/* <button> Send </button>
//         <button onClick={() => setButtonPopup(false)}> Cancel </button>
//       </Popup> */}{" "}
//       </s.MainContainer>
//     </s.CRMContainer>
//   );
// };

// export default Groups;
