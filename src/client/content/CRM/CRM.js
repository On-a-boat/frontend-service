import React from 'react'
import styled from 'styled-components'
import { useTable, usePagination, useRowSelect, useSortBy } from 'react-table'

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <input type="checkbox" ref={resolvedRef} {...rest} />
            </>
        )
    }
)

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,

        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
        usePagination,
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                // Let's make a column for selection
                {
                    id: 'selection',
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox
                    Header: ({ getToggleAllPageRowsSelectedProps }) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
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
            ])
        }
    )

    // Render the UI for your table

    // <div>
    //         <table className="table" {...getTableProps()}>
    //             <thead>
    //                 {headerGroups.map(headerGroup => (
    //                     <tr {...headerGroup.getHeaderGroupProps()}>
    //                         {headerGroup.headers.map(column => (
    //                             // Add the sorting props to control sorting. For this example
    //                             // we can add them into the header props
    //                             <th {...column.getHeaderProps(column.getSortByToggleProps())}>
    //                                 {column.render('Header')}
    //                                 {/* Add a sort direction indicator */}
    //                                 <span>
    //                                     {column.isSorted
    //                                         ? column.isSortedDesc
    //                                             ? ' 🔽'
    //                                             : ' 🔼'
    //                                         : ''}
    //                                 </span>
    //                             </th>
    //                         ))}
    //                     </tr>
    //                 ))}
    //             </thead>
    //             <tbody {...getTableBodyProps()}>
    //                 {rows.map(
    //                     (row, i) => {
    //                         prepareRow(row);
    //                         return (
    //                             <tr {...row.getRowProps()}>
    //                                 {row.cells.map(cell => {
    //                                     return (
    //                                         <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
    //                                     )
    //                                 })}
    //                             </tr>
    //                         )
    //                     }
    //                 )}
    //             </tbody>
    //         </table>
    //         <br />
    //         <div>Showing the first 20 results of {rows.length} rows</div>
    //     </div >
    return (
        <>

            <table {...getTableProps()}>
                <thead >

                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
            </div>
        </>
    )
}

function CRM() {
    const columns = React.useMemo(
        () => [

            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },

            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
            }
        ]
    )

    const data = React.useMemo(() => makeData(100), [])

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    )
}

export default CRM
