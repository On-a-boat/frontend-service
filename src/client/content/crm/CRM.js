import React from "react";
import {
    useTable,
    usePagination,
    useRowSelect,
    useSortBy,
    useFilters,
} from "react-table";
import axios from 'axios';
import { useState, useEffect, Fragment } from "react";
import * as s from "./CRM.styles";
import DefaultColumnFilter from "./filters/DefaultColumnFilter";
// import SelectColumnFilter from "./filters/SelectColumnFilter";
import NumberRangeColumnFilter from "./filters/NumberRangeColumnFilter";
// import SliderColumnFilter from "./filters/SliderColumnFilter";
import Popup from "../../components/Popup";

//toggle dropdown menu open/close
var toClose = false
function toggle(e) {
    e.stopPropagation();
    var btn = this;
    var menu = btn.nextSibling;

    while (menu && menu.nodeType !== 1) {
        menu = menu.nextSibling
    }
    if (!menu) return;
    if (menu.style.display !== 'block') {
        menu.style.display = 'block';
        if (toClose) toClose.style.display = "none";
        toClose = menu;
    } else {
        menu.style.display = 'none';
        toClose = false;
    }

};

window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-buy-list").forEach(function (btn) {
        btn.addEventListener("click", toggle, true);
    });
});

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
    // default filter for each column
    const defaultColumn = React.useMemo(
        () => ({

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
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr>
                            {headerGroup.headers.map((column) => (
                                <th>
                                    <span>{column.render("Header")}</span>
                                    <span>
                                        {column.Header.length > 1 ?
                                            <span class="product-price-box">
                                                <div class="buy">
                                                    <button class="btn-buy-list" id="dropBtn1">...<span class="btn-arrow"></span></button>
                                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                                        <li >
                                                            {column.canFilter ? column.render("Filter") : null}
                                                        </li>
                                                        <li  {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                            {column.Header.length > 1
                                                                ? column.isSorted
                                                                    ? column.isSortedDesc
                                                                        ? "Default"
                                                                        : "Sort in Desc"
                                                                    : "Sort in Asc"
                                                                : null}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </span> : null}
                                    </span>
                                </th>
                            ))}
                        </tr>
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



function CRM() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [userId, setUserId] = useState([]);
    const [data, setData] = useState([]);

    // Fetch users data from the Database.
    useEffect(() => {
        let isMounted = true;
        const getUser = async () => {
            try {

                const users = await axios.get("http://13.54.19.72:5000/filter/show");

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


    // Table columns hard coded. NEED FIX!
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
        {
            Header: "",
            accessor: "Link",
            Cell: e => <a href={"userprofile/" + e.value}>Link</a >
        },
    ];


    // Create new group JSON and post to the Database.
    const makeGroup = () => {
        const selectedRows = JSON.parse(localStorage.getItem("selectedRows"));
        var updateId = [];
        selectedRows.forEach(row => { updateId.push(row.UserId); });
        setUserId(updateId);

        if (userId.length > 0 && groupName !== "") {
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
        <div style={{ margin: "auto", marginTop: "50px" }}>
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
            <s.TableStyles>
                <Table columns={columns} data={data} />
            </s.TableStyles>


        </div>
    );
}

export default CRM;
