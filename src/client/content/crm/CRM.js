import React, { useState, useEffect } from "react";
import {
  useTable,
  usePagination,
  useRowSelect,
  useSortBy,
  useFilters,
} from "react-table";
import { useHistory } from "react-router-dom";
import axios from "axios";
import DefaultColumnFilter from "./filters/DefaultColumnFilter";
import NumberRangeColumnFilter from "./filters/NumberRangeColumnFilter";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as s from "./CRM.styles";

//A checkbox for each row in the table
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

// table
const Table = function ({ columns, data }) {
  // Define filtering options; case insensitive
  const filterTypes = React.useMemo(
    () => ({
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

  // default filter for each column
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  // States and functions returned from useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    selectedFlatRows,
    state: { pageIndex },
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

    // define functionalities for checkbox
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        //  make a column for selection
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
    <s.CRMTableContainer>
      <s.CRMTable {...getTableProps()}>
        {headerGroups.map((headerGroup) => (
          <tr>
            {headerGroup.headers.map((column) => (
              <th>
                {/* header */}
                <span>{column.render("Header")}</span>

                <span>
                  {column.Header.length > 1 ? (
                    <PopupState>
                      {(popupState) => (
                        <>
                          &emsp; &emsp;
                          <s.DropDownButton {...bindTrigger(popupState)}>
                            •••
                          </s.DropDownButton>
                          <Menu {...bindMenu(popupState)}>
                            <MenuItem>
                              {column.canFilter
                                ? column.render("Filter")
                                : null}
                            </MenuItem>

                            <MenuItem
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                            >
                              {column.Header.length > 1
                                ? column.isSorted
                                  ? column.isSortedDesc
                                    ? "⇵ Default"
                                    : "↓ Sort in Desc"
                                  : "↑ Sort in Asc"
                                : null}
                            </MenuItem>
                          </Menu>
                        </>
                      )}
                    </PopupState>
                  ) : null}
                </span>
              </th>
            ))}
          </tr>
        ))}

        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </s.CRMTable>

      {/*  define pagination of the table,  */}
      <s.Pagination>
        <s.PaginationArrowContainer>
          <s.PaginationArrowButton
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </s.PaginationArrowButton>{" "}
          <s.PaginationArrowButton
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </s.PaginationArrowButton>{" "}
          <s.PaginationArrowButton
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </s.PaginationArrowButton>{" "}
          <s.PaginationArrowButton
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </s.PaginationArrowButton>{" "}
          <s.CurrPage>
            Page {pageIndex + 1} of {pageOptions.length}{" "}
          </s.CurrPage>
        </s.PaginationArrowContainer>
      </s.Pagination>

      {/* Create a JSON file for checked rows */}
      <pre>
        <code>
          {localStorage.setItem(
            "selectedRows",
            JSON.stringify(selectedFlatRows.map((d) => d.original))
          )}
        </code>
      </pre>
    </s.CRMTableContainer>
  );
};

function CRM() {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [groupName, setGroupName] = useState("");
  const [userId, setUserId] = useState([]);

  const history = useHistory();

  // Create new group JSON and post to the Database.
  const makeGroup = () => {
    const Ymd = (date) => date.toISOString().slice(0, 10);
    const selectedRows = JSON.parse(localStorage.getItem("selectedRows"));
    var updateId = [];
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleEmailSend = () => {
    localStorage.setItem(
      "to",
      JSON.parse(localStorage.getItem("selectedRows")).map((a) => a.UserId)
    );
    history.push("/send");
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

  // Table columns
  const columns = [
    {
      Header: "User ID",
      accessor: "UserId",
    },
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },

    {
      Header: "Age",
      accessor: "age",
      Filter: NumberRangeColumnFilter,
      filter: "between",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    // {
    //   Header: "",
    //   accessor: "Link",
    //   Cell: (e) => <a href={"userprofile/" + e.value}>Link</a>,
    // },
  ];

  return (
    <div style={{ width: "80%" }}>
      {/* new group button */}
      <s.CreateGroupModalButton variant="outlined" onClick={handleClickOpen}>
        + Create New Group
      </s.CreateGroupModalButton>
      <s.CreateGroupModalButton variant="outlined" onClick={handleEmailSend}>
        Send Email
      </s.CreateGroupModalButton>

      {/* popup */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>CREATE A NEW GROUP</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select users that you wish to include in your group, name your group
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

      {/* crm table */}
      <Table columns={columns} data={data} />
    </div>
  );
}

export default CRM;
