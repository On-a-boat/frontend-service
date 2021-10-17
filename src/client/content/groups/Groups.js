import React from "react";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import {
  useTable,
  usePagination,
  useRowSelect,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import DefaultColumnFilter from "../crm/filters/DefaultColumnFilter";
import Popup from "../../components/Popup";
import NumberRangeColumnFilter from "../crm/filters/NumberRangeColumnFilter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import * as s from "../crm/CRM.styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// Copied from CRM.js
//------------------------------------------------------------------------------------------------------------
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

const Table = function ({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      // override the default text filter to use"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <Fragment>
              <tr>
                {headerGroup.headers.map((column) => (
                  <th>{column.render("Header")}</th>
                ))}
              </tr>
            </Fragment>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>

      <pre>
        <code>
          {localStorage.setItem(
            "selectedRows",
            JSON.stringify(selectedFlatRows.map((d) => d.original))
          )}
        </code>
      </pre>
    </>
  );
};
//------------------------------------------------------------------------------------------------------------

const Groups = () => {
  const [data, setData] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [email, setEmail] = useState("");
  const handleClose = () => setButtonPopup(false);

  const columns = React.useMemo(() => [
    {
      Header: "No.",
      accessor: "GroupId",
    },
    {
      Header: "Group Name",
      accessor: "groupName",
    },
    {
      Header: "Users",
      accessor: "userCount",
    },
    {
      Header: "Date Created",
      accessor: "dateCreated",
    },
    {
      Header: "Emails Sent",
      accessor: "emailSent",
    },
    {
      Header: "",
      accessor: "none",
      Cell: (e) => (
        <button onClick={() => setButtonPopup(true)}>{"Send email"}</button>
      ),
    },
  ]);

  // Fetch groups from the Database.
  useEffect(() => {
    let isMounted = true;
    const getGroup = async () => {
      try {
        const groups = await axios.get(
          "https://backend.weeyapp-crm-on-a-boat.com/group"
        );

        if (isMounted) {
          setData(groups.data);
        }
        console.log(groups);
      } catch (error) {
        console.error(error);
      }
    };
    getGroup();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <s.TableStyles>
        <Table columns={columns} data={data} />
      </s.TableStyles>
      <Modal
        open={buttonPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} justifyContent="center" alignItems="center">
          <Typography variant="h5"> Send Email</Typography>
          <TextField
            id="outlined-multiline-flexible"
            label="Subject"
            multiline
            maxRows={2}
            margin="normal"
            fullWidth
          />
          <form>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Add Voucher"
              />
            </FormGroup>
            <TextField
              id="outlined-multiline-static"
              rows={10}
              margin="normal"
              label="Enter the field below"
              multiline
              fullWidth
              required
            />
          </form>
          <Button
            onclick={handleClose}
            type="submit"
            color="secondary"
            variants="contained"
            size="large"
          >
            Submit
          </Button>
        </Box>
      </Modal>
      {/* <Popup trigger={buttonPopup}>
        <input
          value={email || ""}
          onChange={(e) => {
            setEmail(e.target.value || ""); // Set undefined to remove the filter entirely
          }}
          placeholder={"Enter email"}
        />
        <input
          value={email || ""}
          onChange={(e) => {
            setEmail(e.target.value || ""); // Set undefined to remove the filter entirely
          }}
          placeholder={"Enter "}
        />

        {/* onClick, send email and update emails sent of table*/}
      {/* <button> Send </button>
        <button onClick={() => setButtonPopup(false)}> Cancel </button>
      </Popup> */}{" "}
    </div>
  );

  //return (<h1>Groups </h1>);
};

export default Groups;
