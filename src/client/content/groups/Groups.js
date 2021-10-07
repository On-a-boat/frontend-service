import React from "react";
import { useState, useEffect, Fragment } from "react";
import axios from 'axios';
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
import NumberRangeColumnFilter from "../crm/filters/NumberRangeColumnFilter";

import * as s from '../crm/CRM.styles';


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
//------------------------------------------------------------------------------------------------------------


const Groups = () => {
    const [data, setData] = useState([]);

    const columns = React.useMemo(
        () => [

            {
                Header: 'No.',
                accessor: 'GroupId',
            },
            {
                Header: 'Group Name',
                accessor: 'GroupName',
            },
            {
                Header: 'Users',
                accessor: 'users',
            },
            {
                Header: 'Date Created',
                accessor: 'Date',
            },
            {
                Header: 'Keywords',
                accessor: 'GroupDescription',
            },
        ]
    )

     // Fetch groups from the Database.
    useEffect(() => {
        let isMounted = true;
        const getGroup = async () => {
            try {
                const groups = await axios.get('http://13.54.19.72:5000/group');

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
        
        <s.TableStyles>
            <Table columns={columns} data={data} />
        </s.TableStyles>
            
        
    );




    //return (<h1>Groups </h1>);
}

export default Groups;