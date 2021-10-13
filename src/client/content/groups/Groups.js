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

import * as s from "../crm/CRM.styles";

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

      <Popup trigger={buttonPopup}>
        <input
          value={email || ""}
          onChange={(e) => {
            setEmail(e.target.value || ""); // Set undefined to remove the filter entirely
          }}
          placeholder={"Enter email"}
        />

        {/* onClick, send email and update emails sent of table*/}
        <button> Send </button>
        <button onClick={() => setButtonPopup(false)}> Cancel </button>
      </Popup>
    </div>
  );

  //return (<h1>Groups </h1>);
};

export default Groups;

// import React from 'react';
// import axios from "axios";
// import { useState, useEffect } from "react";
// import {
//     useTable,
// } from "react-table";
// import * as s from "./Groups.styles";

// // import namor from 'namor'

// // const range = len => {
// //     const arr = []
// //     for (let i = 0; i < len; i++) {
// //         arr.push(i)
// //     }
// //     return arr
// // }

// // const newGroup = () => {
// //     const statusChance = Math.random()
// //     return {
// //         num:1,
// //         groupName: namor.generate({ words: 1, numbers: 0 }),
// //         users: Math.floor(Math.random() * 100),
// //         dataCreated: Math.floor(Math.random() * 100),
// //         emailSent: Math.floor(Math.random() * 100),

// //     }
// // }

// // function makeData(...lens) {
// //     const makeDataLevel = (depth = 0) => {
// //         const len = lens[depth]
// //         return range(len).map(d => {
// //             return {
// //                 ...newGroup(),
// //                 subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
// //             }
// //         })
// //     }

// //     return makeDataLevel()
// // }

// export const Table = function ({ columns, data }) {
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         page,
//         prepareRow,

//     } = useTable(
//         {
//             columns,
//             data,

//         },
//     )
//     return (
//         <table {...getTableProps()}>
//             <thead>
//                 {headerGroups.map((headerGroup) => (
//                     <tr>
//                         {headerGroup.headers.map((column) => (
//                             <th>
//                                 <span>{column.render("Header")}</span>
//                             </th>
//                         ))}
//                     </tr>
//                 ))}
//             </thead>

//             <tbody {...getTableBodyProps()}>
//                 {page && page.map((row, i) => {
//                     prepareRow(row);
//                     return (
//                         <tr {...row.getRowProps()}>
//                             {row.cells.map((cell) => {
//                                 return (
//                                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                                 );
//                             })}
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table>);

// }

// function Groups() {
//     const [data, setData] = useState([]);

//     // Fetch users data from the Database.
//     useEffect(() => {
//         let isMounted = true;
//         const getUser = async () => {
//             try {
//                 const users = await axios.get("http://13.54.19.72:5000/group");

//                 if (isMounted) {
//                     setData(users.data);
//                 }

//                 console.log(users);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         getUser();
//         return () => {
//             isMounted = false;
//         };
//     }, []);

//     const columns = [

//         {
//             Header: 'No.',
//             accessor: 'GroupId',
//         },
//         {
//             Header: 'Group Name',
//             accessor: 'groupName',
//         },

//         {
//             Header: 'Date Created',
//             accessor: 'dateCreated',
//         },
//         {
//             Header: 'Emails sent',
//             accessor: 'emailSent',
//         },
//     ]

//     // const data = React.useMemo(() => makeData(100), []) // Fetch groups data from DB using axios later.

//     return (
//         <s.TableStyles>
//             <Table columns={columns} data={data} />
//         </s.TableStyles>

//     );
// }

// export default Groups;
