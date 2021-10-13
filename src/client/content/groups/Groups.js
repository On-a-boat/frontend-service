import React from 'react';
import * as s from '../crm/CRM.styles';



import namor from 'namor'

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const newGroup = () => {
    const statusChance = Math.random()
    return {
        num: 1,
        groupName: namor.generate({ words: 1, numbers: 0 }),
        users: Math.floor(Math.random() * 100),
        dataCreated: Math.floor(Math.random() * 100),
        emailSent: Math.floor(Math.random() * 100),

    }
}

function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newGroup(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}


const Groups = () => {

    const columns = React.useMemo(
        () => [

            {
                Header: 'No.',
                accessor: 'num',
            },
            {
                Header: 'Group Name',
                accessor: 'groupName',
            },
            {
                Header: 'Users',
                accessor: 'users',
            },
            {
                Header: 'Date Created',
                accessor: 'dateCreated',
            },
            {
                Header: 'Emails sent',
                accessor: 'emailSent',
            },
        ]
    )

    const data = React.useMemo(() => makeData(100), []) // Fetch groups data from DB using axios later.




    return (<h1>Groups </h1>);
}

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