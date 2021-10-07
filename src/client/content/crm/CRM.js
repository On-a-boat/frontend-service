import React from "react";
import {
    useTable,
    usePagination,
    useRowSelect,
    useSortBy,
    useFilters,
    useGlobalFilter,
    useAsyncDebounce,
} from "react-table";
import makeData from "./makeData";
import axios from 'axios';
import { useState, useEffect, Fragment } from "react";
import * as s from "./CRM.styles";
import DefaultColumnFilter from "./filters/DefaultColumnFilter";
import SelectColumnFilter from "./filters/SelectColumnFilter";
import NumberRangeColumnFilter from "./filters/NumberRangeColumnFilter";
import SliderColumnFilter from "./filters/SliderColumnFilter";
import Popup from "../../components/Popup";

/////////////////////////////////////////////////
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

export const Table = function ({ columns, data }) {
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
                                    <th>
                                        {column.render("Header")}
                                        {/* Render the columns filter UI */}
                                        <div>
                                            {column.canFilter ? column.render("Filter") : null}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    // Add the sorting props to control sorting. For this example
                                    // we can add them into the header props
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        <span>
                                            {/* no sorting for selection row */}
                                            {/* I know it's a hardcoding, leave it for now  */}
                                            {column.Header.length > 1
                                                ? column.isSorted
                                                    ? column.isSortedDesc
                                                        ? " 🔽"
                                                        : " 🔼"
                                                    : "{click to sort (temp)"
                                                : null}
                                        </span>
                                    </th>
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
                    {
                        localStorage.setItem(
                            "selectedRows",
                            JSON.stringify(selectedFlatRows.map(d => d.original))
                        )
                    }
                </code>
            </pre>
        </>
    );
};

// JSON.stringify(
                        //     {
                        //         selectedRowIds: selectedRowIds,
                        //         'selectedFlatRows[].original': selectedFlatRows.map(
                        //             d => d.original
                        //         ),
                        //     },
                        //     null,
                        //     2
                        // )

function CRM() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState([]);


    // Table columns hard coded. NEED FIX!
    const columns = React.useMemo(() => [
        {
            Header: "User ID",
            accessor: "UserId",
            //accessor: "visits",
        },
        {
            Header: "First Name",
            accessor: "FirstName",
            //accessor: "firstName",

        },
        {
            Header: "Last Name",
            accessor: "LastName",
            //accessor: "lastName",
        },

        {
            Header: "Age",
            accessor: "Age",
            //accessor: "age",
            Filter: NumberRangeColumnFilter,
            filter: "between",
        },
        {
            Header: "Gender",
            accessor: "Gender",
            //accessor: "progress",

        },
        {
            Header: "Keywords",
            accessor: "Keywords",
            //accessor: "status",
        },
    ]);


    // Fetch users data from the Database.
    useEffect(() => {
        let isMounted = true;
        const getUser = async () => {
            try {
                //const users = await axios.get('http://localhost:5000/filter');
                const users = await axios.get('http://13.54.19.72:5000/filter');

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
    

    // Create new group JSON and post to the Database.
    const makeGroup = () => {
        const selectedRows = JSON.parse(localStorage.getItem("selectedRows"));
        var updateId = [];
        selectedRows.forEach(row => { updateId.push(row.UserId); });
        setUserId(updateId);

        if (userId.length > 0 && groupName != "") {
            const newGroup = {
                name: groupName,
                users: userId,
                userCount: userId.length,
                dateCreated: new Date().toLocaleDateString(),
            };
            // axios.post this JSON to db later. NEED FIX!
            console.log(JSON.stringify(newGroup));
            // display that group was created to the admin here. NEED FIX!
        }
    };
    
    

    return (
        <div>
            <s.TableStyles>
                <Table columns={columns} data={data} />
            </s.TableStyles>

            <button onClick={() => setButtonPopup(true)}>{"Create Group"}</button>
            <Popup trigger={buttonPopup}>
                <input
                    value={groupName || ""}
                    onChange={(e) => {
                        setGroupName(e.target.value || ""); // Set undefined to remove the filter entirely
                    }}
                    placeholder={"Enter group name"}
                />
                <button onClick={() => makeGroup()}> Create </button>
                <button onClick={() => setButtonPopup(false)}> Cancel </button>
            </Popup>
        </div>
    );
}

export default CRM;
