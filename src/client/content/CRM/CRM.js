// // import React, { useState } from 'react';
// // import * as s from './CRM.styles'; // bring in all the components from app.styles.js 
// // import { DataGrid } from '@mui/x-data-grid';
// // import { Link } from "react-router-dom";


// // const columns = [
// //     { field: 'id', headerName: 'No.', width: 100 },
// //     {
// //         field: 'firstName',
// //         headerName: 'First name',
// //         width: 150,
// //         editable: true,
// //     },
// //     {
// //         field: 'lastName',
// //         headerName: 'Last name',
// //         width: 150,
// //         editable: true,
// //     },
// //     {
// //         field: 'email',
// //         headerName: 'Email',
// //         width: 250,
// //         editable: true,


// //     },
// //     {
// //         field: 'gender',
// //         headerName: 'Gender',
// //         width: 130,
// //         editable: true,


// //     },
// //     {
// //         field: 'age',
// //         headerName: 'Age',
// //         width: 130,
// //         editable: true,
// //     },
// //     {
// //         field: 'signUpDate',
// //         headerName: 'Sign Up Date',
// //         width: 170,
// //         editable: true,
// //     },

// //     // {
// //     //     field: 'fullName',
// //     //     headerName: 'Full name',
// //     //     description: 'This column has a value getter and is not sortable.',
// //     //     sortable: false,
// //     //     width: 160,
// //     //     valueGetter: (params) =>
// //     //         `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
// //     //         }`,
// //     // },
// // ];

// // const rows = [
// //     { id: 1, to: "/0001", firstName: 'John', lastName: 'Anderson', age: 28, email: 'johnandy111@gmail.com', gender: 'M', signUpDate: '26/Mar/2021' },
// //     { id: 2, to: "/0002", firstName: 'Jack', lastName: 'Zhang', age: 35, email: 'jackchina@gmail.com', gender: 'M', signUpDate: '26/Apr/2021' },
// //     { id: 3, to: "/0003", firstName: 'Ben', lastName: 'Benny', age: 21, email: 'benben1@gmail.com', gender: 'M', signUpDate: '15/Sep/2021' },
// //     { id: 4, to: "/0004", firstName: 'Eva', lastName: 'Clark', age: 22, email: 'evaclark123@gmail.com', gender: 'F', signUpDate: '11/Mar/2021' },
// //     { id: 5, to: "/0005", firstName: 'John', lastName: 'Annister', age: 28, email: 'johna@gmail.com', gender: 'M', signUpDate: '16/May/2021' },
// //     { id: 6, to: "/0006", firstName: 'Jimmy', lastName: 'Gibson', age: 18, email: 'jgibs98323@gmail.com', gender: 'M', signUpDate: '18/Dec/2020' },
// //     { id: 7, to: "/0007", firstName: 'Shifeng', lastName: 'Zhang', age: 22, email: 'shifeng11@gmail.com', gender: 'M', signUpDate: '16/Nov/2021' },
// //     { id: 8, to: "/0008", firstName: 'Elizabeth', lastName: 'Cooper', age: 24, email: 'elic96@gmail.com', gender: 'F', signUpDate: '03/Oct/2021' },
// //     { id: 9, to: "/0009", firstName: 'Anna', lastName: 'Anderson', age: 27, email: 'anandy101@gmail.com', gender: 'F', signUpDate: '2/Apr/2021' },
// //     { id: 10, to: "/0010", firstName: 'Donald', lastName: 'Trump', age: 99, email: 'trump@gmail.com', gender: 'M', signUpDate: '15/Mar/2020' },
// //     { id: 11, to: "/0011", firstName: 'Joe', lastName: 'Biden', age: 105, email: 'joe@gmail.com', gender: 'M', signUpDate: '26/Jan/2021' },
// //     { id: 12, to: "/0012", firstName: 'John', lastName: 'Higgs', age: 28, email: 'higgsj@gmail.com', gender: 'M', signUpDate: '26/Mar/2021' },
// //     { id: 13, to: "/0013", firstName: 'Christina', lastName: 'Walfer', age: 44, email: 'johnandy111@gmail.com', gender: 'F', signUpDate: '25/Mar/2021' },
// //     { id: 14, to: "/0014", firstName: 'John', lastName: 'Joe', age: 14, email: 'johnjjjj@gmail.com', gender: 'M', signUpDate: '24/Mar/2021' },
// //     { id: 15, to: "/0015", firstName: 'Mohammed', lastName: 'Mohammed', age: 38, email: 'momo1@gmail.com', gender: 'M', signUpDate: '29/Mar/2021' },
// //     { id: 16, to: "/0016", firstName: 'Xiaowen', lastName: 'Dan', age: 28, email: 'xxxdan@gmail.com', gender: 'F', signUpDate: '08/Feb/2020' },
// //     { id: 17, to: "/0017", firstName: 'Junseok', lastName: 'Han', age: 70, email: 'junsh1@gmail.com', gender: 'M', signUpDate: '26/Dec/2021' },
// //     { id: 18, to: "/0018", firstName: 'Minhee', lastName: 'Kim', age: 68, email: 'minh1@gmail.com', gender: 'F', signUpDate: '30/Aug/2021' },
// //     { id: 19, to: "/0019", firstName: 'Shuhei', lastName: 'Yamamoto', age: 21, email: 'yama333@gmail.com', gender: 'M', signUpDate: '19/Nov/2021' },
// //     { id: 20, to: "/0020", firstName: 'Jenna', lastName: 'Kilsby', age: 19, email: 'jennak99@gmail.com', gender: 'F', signUpDate: '01/Sep/2021' },



// // ];

// // export default function CRM() {
// //     const createNewGroup = () => {

// //     }
// //     return (

// //         <DataGrid
// //             rows={rows}
// //             columns={columns}
// //             to={rows.to}
// //             pageSize={10}
// //             rowsPerPageOptions={[5]}
// //             checkboxSelection

// //         />

// //     );
// // }

// //         //  <div style={{ height: '100%', width: '80%' }} >
// //         //     <s.CreateGroupButton onClick={createNewGroup}>Create New Group</s.CreateGroupButton>

// //         //     </div>















// // import React, { forwardRef, useEffect } from 'react'
// // import styled from '@emotion/styled'
// // import { useTable, usePagination } from 'react-table'
// // import namor from 'namor'

// // const range = len => {
// //     const arr = []
// //     for (let i = 0; i < len; i++) {
// //         arr.push(i)
// //     }
// //     return arr
// // }

// // const newPerson = () => {
// //     const statusChance = Math.random()
// //     return {
// //         firstName: namor.generate({ words: 1, numbers: 0 }),
// //         lastName: namor.generate({ words: 1, numbers: 0 }),
// //         age: Math.floor(Math.random() * 30),
// //         visits: Math.floor(Math.random() * 100),
// //         progress: Math.floor(Math.random() * 100),
// //         status:
// //             statusChance > 0.66
// //                 ? 'relationship'
// //                 : statusChance > 0.33
// //                     ? 'complicated'
// //                     : 'single',
// //         details: "/001",
// //     }
// // }

// // function makeData(...lens) {
// //     const makeDataLevel = (depth = 0) => {
// //         const len = lens[depth]
// //         return range(len).map(d => {
// //             return {
// //                 ...newPerson(),
// //                 subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
// //             }
// //         })
// //     }

// //     return makeDataLevel()
// // }

// // ////////////////////////////////////

// // const Styles = styled.div`
// //   padding: 1rem;
// //   table {
// //     border-spacing: 0;
// //     border: 1px solid black;

// //     tr {
// //       :last-child {
// //         td {
// //           border-bottom: 0;
// //         }
// //       }
// //     }

// //     th,
// //     td {
// //       margin: 0;
// //       padding: 0.5rem;
// //       border-bottom: 1px solid black;
// //       border-right: 1px solid black;

// //       :last-child {
// //         border-right: 0;
// //       }
// //     }
// //   }

// //   .pagination {
// //     padding: 0.5rem;
// //   }
// // `
// // ////////////////////////////////////

// // const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
// //     const defaultRef = React.useRef();
// //     const resolvedRef = ref || defaultRef;

// //     useEffect(() => {
// //         resolvedRef.current.indeterminate = indeterminate;
// //     }, [resolvedRef, indeterminate]);

// //     return (
// //         <>
// //             <input type="checkbox" ref={resolvedRef} {...rest} />
// //         </>
// //     );
// // });

// // ////////////////////////////////////

// // function Table({ columns, data }) {
// //     // Use the state and functions returned from useTable to build your UI
// //     const {
// //         getTableProps,
// //         getTableBodyProps,
// //         headerGroups,
// //         prepareRow,
// //         page, // Instead of using 'rows', we'll use page,
// //         // which has only the rows for the active page

// //         // The rest of these things are super handy, too ;)
// //         canPreviousPage,
// //         canNextPage,
// //         pageOptions,
// //         pageCount,
// //         gotoPage,
// //         nextPage,
// //         previousPage,
// //         setPageSize,
// //         state: { pageIndex, pageSize },
// //     } = useTable(
// //         {
// //             columns,
// //             data,
// //             initialState: { pageIndex: 2 },
// //         },
// //         usePagination
// //     )

// //     // Render the UI for your table
// // return (
// //     <>

// //         <table {...getTableProps()}>
// //             <thead>
// //                 {headerGroups.map(headerGroup => (
// //                     <tr {...headerGroup.getHeaderGroupProps()}>
// //                         {headerGroup.headers.map(column => (
// //                             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
// //                         ))}
// //                     </tr>
// //                 ))}
// //             </thead>
// //             <tbody {...getTableBodyProps()}>
// //                 {page.map((row, i) => {
// //                     prepareRow(row)
// //                     return (
// //                         <tr {...row.getRowProps()}>
// //                             {row.cells.map(cell => {
// //                                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
// //                             })}
// //                         </tr>
// //                     )
// //                 })}
// //             </tbody>
// //         </table>
// //         {/* 
// //         Pagination can be built however you'd like. 
// //         This is just a very basic UI implementation:
// //       */}
// //         <div className="pagination">
// //             <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
// //                 {'<<'}
// //             </button>{' '}
// //             <button onClick={() => previousPage()} disabled={!canPreviousPage}>
// //                 {'<'}
// //             </button>{' '}
// //             <button onClick={() => nextPage()} disabled={!canNextPage}>
// //                 {'>'}
// //             </button>{' '}
// //             <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
// //                 {'>>'}
// //             </button>{' '}
// //             <span>
// //                 Page{' '}
// //                 <strong>
// //                     {pageIndex + 1} of {pageOptions.length}
// //                 </strong>{' '}
// //             </span>
// //             {/* <span>
// //                     | Go to page:{' '}
// //                     <input
// //                         type="number"
// //                         defaultValue={pageIndex + 1}
// //                         onChange={e => {
// //                             const page = e.target.value ? Number(e.target.value) - 1 : 0
// //                             gotoPage(page)
// //                         }}
// //                         style={{ width: '100px' }}
// //                     />
// //                 </span> */}
// //             {/* {' '}
// //                 <select
// //                     value={pageSize}
// //                     onChange={e => {
// //                         setPageSize(Number(e.target.value))
// //                     }}
// //                 >
// //                     {[10, 20, 30, 40, 50].map(pageSize => (
// //                         <option key={pageSize} value={pageSize}>
// //                             Show {pageSize}
// //                         </option>
// //                     ))}
// //                 </select> */}
// //         </div>
// //     </>
// // //     )
// // // }

// // // function App() {
// // //     const columns = React.useMemo(
// // //         () => [

// // //             {
// // //                 Header: 'First Name',
// // //                 accessor: 'firstName',
// // //             },
// // //             {
// // //                 Header: 'Last Name',
// // //                 accessor: 'lastName',
// // //             },

// // //             {
// // //                 Header: 'Age',
// // //                 accessor: 'age',
// // //             },
// // //             {
// // //                 Header: 'Visits',
// // //                 accessor: 'visits',
// // //             },
// // //             {
// // //                 Header: 'Status',
// // //                 accessor: 'status',
// // //             },
// // //             {
// // //                 Header: 'Profile Progress',
// // //                 accessor: 'progress',
// // //             },
// // //             {
// // //                 Header: 'Details',
// // //                 accessor: 'details',
// // //                 Cell: e => <a href={e.value}> {e.value} </a>
// // //             },

// // //         ]
// // //     )

// // //     const data = React.useMemo(() => makeData(100), [])

// // //     return (
// // //         <Styles>
// // //             <Table columns={columns} data={data} />
// // //         </Styles>
// // //     )
// // // }

// // // export default App















// import React, { useMemo } from 'react';
// import { useTable, useRowSelect, usePagination } from "react-table";
// import { forwardRef, useEffect } from 'react';
// import styled from '@emotion/styled'
// import namor from 'namor'

// const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef();
//     const resolvedRef = ref || defaultRef;

//     useEffect(() => {
//         resolvedRef.current.indeterminate = indeterminate;
//     }, [resolvedRef, indeterminate]);

//     return (
//         <>
//             <input type="checkbox" ref={resolvedRef} {...rest} />
//         </>
//     );
// });
// const columns = [

//     {
//         Header: 'First Name',
//         Footer: <hr />,
//         accessor: 'firstName',
//         filter: (rows, id, filterType) => rows.filter(row => row.values[id].startsWith(filterType)),
//     },
//     {
//         Header: 'Last Name',
//         accessor: 'lastName',
//     },


//     {
//         Header: 'Age',
//         accessor: 'age',
//     },
//     {
//         Header: 'Gender',
//         accessor: 'gender',
//     },
//     {
//         Header: info => {
//             const message = useMemo(
//                 () => {
//                     if (info.rows.length === 0) {
//                         return 'Unknown';
//                     }
//                     const range = info.rows.reduce((sum, row, i) => {
//                         if (i === 0) {
//                             return sum;
//                         }
//                         return { min: Math.min(sum.min, row.values.grade), max: Math.max(sum.max, row.values.grade) }
//                     }, { min: info.rows[0].values.grade, max: info.rows[0].values.grade });
//                     return `${range.min} - ${range.max}`;
//                 },
//                 [info.rows])

//             return `Grade: (${message})`
//         },
//         accessor: 'grade',
//     },


// ];

// const data = [
//     {
//         firstName: 'Alice',
//         lastName: 'Johnson',
//         age: 9,
//         gender: 'F',
//         grade: 4,
//     },
//     {
//         firstName: 'Mike',
//         lastName: 'Ford',
//         age: 5,
//         gender: 'M',
//         grade: 1,
//     },
//     {
//         firstName: 'John',
//         lastName: 'Smith',
//         age: 8,
//         gender: 'M',
//         grade: 4,
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Johnson',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Linda',
//         lastName: 'Ford',
//         age: 8,
//         gender: 'F',
//         grade: 5,
//     },
//     {
//         firstName: 'Noah',
//         lastName: 'Wilson',
//         age: 9,
//         gender: 'M',
//         grade: 3,
//     },
//     {
//         firstName: 'Emma',
//         lastName: 'Lee',
//         age: 7,
//         gender: 'F',
//         grade: 3,
//     },
//     {
//         firstName: 'James',
//         lastName: 'Jones',
//         age: 10,
//         gender: 'M',
//         grade: 5,
//     },
//     {
//         firstName: 'Mia',
//         lastName: 'Brown',
//         age: 8,
//         gender: 'F',
//         grade: 5,
//     },
//     {
//         firstName: 'William',
//         lastName: 'Davis',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'John',
//         lastName: 'Jones',
//         age: 14,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Lo',
//         lastName: 'Bown',
//         age: 8,
//         gender: 'F',
//         grade: 5,
//     },
//     {
//         firstName: 'Will',
//         lastName: 'David',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'John',
//         lastName: 'Higgs',
//         age: 14,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Que',
//         lastName: 'Vale',
//         age: 8,
//         gender: 'F',
//         grade: 5,
//     },
//     {
//         firstName: 'Sillion',
//         lastName: 'Davis',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Jack',
//         lastName: 'Higgs',
//         age: 14,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Alice',
//         lastName: 'Johnson',
//         age: 9,
//         gender: 'F',
//         grade: 4,
//     },
//     {
//         firstName: 'Mike',
//         lastName: 'Ford',
//         age: 5,
//         gender: 'M',
//         grade: 1,
//     },
//     {
//         firstName: 'John',
//         lastName: 'Smith',
//         age: 8,
//         gender: 'M',
//         grade: 4,
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Johnson',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Linda',
//         lastName: 'Ford',
//         age: 8,
//         gender: 'F',
//         grade: 5,
//     },
//     {
//         firstName: 'Que',
//         lastName: 'Vale',
//         age: 8,
//         gender: 'F',
//         grade: 5,
//     },
//     {
//         firstName: 'Sillion',
//         lastName: 'Davis',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Jack',
//         lastName: 'Higgs',
//         age: 14,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Alice',
//         lastName: 'Johnson',
//         age: 9,
//         gender: 'F',
//         grade: 4,
//     },
//     {
//         firstName: 'Mike',
//         lastName: 'Ford',
//         age: 5,
//         gender: 'M',
//         grade: 1,
//     },
//     {
//         firstName: 'John',
//         lastName: 'Smith',
//         age: 8,
//         gender: 'M',
//         grade: 4,
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Johnson',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Linda',
//         lastName: 'Ford',
//         age: 8,
//         gender: 'F',
//         grade: 5,
//     },
//     {
//         firstName: 'Sillion',
//         lastName: 'Davis',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Jack',
//         lastName: 'Higgs',
//         age: 14,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Alice',
//         lastName: 'Johnson',
//         age: 9,
//         gender: 'F',
//         grade: 4,
//     },
//     {
//         firstName: 'Mike',
//         lastName: 'Ford',
//         age: 5,
//         gender: 'M',
//         grade: 1,
//     },
//     {
//         firstName: 'John',
//         lastName: 'Smith',
//         age: 8,
//         gender: 'M',
//         grade: 4,
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Johnson',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Linda',
//         lastName: 'Ford',
//         age: 8,
//         gender: 'F',
//         grade: 5,
//     },
//     {
//         firstName: 'Que',
//         lastName: 'Vale',
//         age: 8,
//         gender: 'F',
//         grade: 5,
//     },
//     {
//         firstName: 'Sillion',
//         lastName: 'Davis',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Jack',
//         lastName: 'Higgs',
//         age: 14,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Alice',
//         lastName: 'Johnson',
//         age: 9,
//         gender: 'F',
//         grade: 4,
//     },
//     {
//         firstName: 'Mike',
//         lastName: 'Ford',
//         age: 5,
//         gender: 'M',
//         grade: 1,
//     },
//     {
//         firstName: 'John',
//         lastName: 'Smith',
//         age: 8,
//         gender: 'M',
//         grade: 4,
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Johnson',
//         age: 11,
//         gender: 'M',
//         grade: 6,
//     },
//     {
//         firstName: 'Linda',
//         lastName: 'Ford',
//         age: 8,
//         gender: 'F',
//         grade: 5,
//     },
// ];

// function App() {

//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         footerGroups,
//         rows,
//         page,
//         prepareRow,
//         canPreviousPage,
//         canNextPage,
//         pageOptions,
//         pageCount,
//         gotoPage,
//         nextPage,
//         previousPage,
//         setPageSize,
//         state: { pageIndex, pageSize },
//     } = useTable(
//         {
//             columns,
//             data,
//             initialState: { pageIndex: 1 },

//         },
//         usePagination,
//         useRowSelect,
//         (hooks) => {
//             hooks.visibleColumns.push((columns) => [
//                 {
//                     id: "selection",
//                     Header: ({ getToggleAllRowsSelectedProps }) => (
//                         <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
//                     ),
//                     Cell: ({ row }) => (
//                         <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
//                     ),
//                 },
//                 ...columns,
//             ]);
//         },
//     );

//     return (
//         <>
//             <table {...getTableProps()}>
//                 <thead>
//                     {headerGroups.map((headerGroup) => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map((column) => (
//                                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {rows.map((row, i) => {
//                         prepareRow(row);
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map((cell) => {
//                                     return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//                                 })}
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//                 <tfoot>
//                     {footerGroups.map((group) => (
//                         <tr {...group.getFooterGroupProps()}>
//                             {group.headers.map((column) => (
//                                 <td {...column.getFooterProps()}>
//                                     {column.Footer && column.render("Footer")}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tfoot>
//             </table>
//             <div className="pagination">
//                 <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//                     {'<<'}
//                 </button>{' '}
//                 <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//                     {'<'}
//                 </button>{' '}
//                 <button onClick={() => nextPage()} disabled={!canNextPage}>
//                     {'>'}
//                 </button>{' '}
//                 <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//                     {'>>'}
//                 </button>{' '}
//                 <span>
//                     Page{' '}
//                     <strong>
//                         {pageIndex + 1} of {pageOptions.length}
//                     </strong>{' '}
//                 </span>
//             </div>

//         </>
//     );
// }

// export default App;

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
