// import Table from '@material-ui/core/Table';
// import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';
// import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from 'react-router-dom'

// const useStyles = makeStyles({
//     table: {
//         width: 500,

//     },
// });


function UserProfile() {

    const [data, setData] = useState([]);
    const { a } = useParams();
    // Fetch users data from the Database.
    useEffect(() => {
        let isMounted = true;
        const getUser = async () => {
            try {
                //const users = await axios.get('http://localhost:5000/filter');
                const users = await axios.get('http://13.54.19.72:5000/filter/user?userId=' + a);

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
    return (<div>{JSON.stringify(data)}


    </div>);

}


export default UserProfile;




  //     const classes = useStyles();


    //     return (
    //         <div className="App">
    //             <div className='table-container'>
    //                 <Table className={classes.table} >
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Full Name</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Full Name</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                     <TableRow className='row-style'>
    //                         <TableCell variant="head">Email</TableCell>
    //                         <TableCell>Cell 1</TableCell>
    //                     </TableRow>
    //                 </Table>
    //             </div>
    //         </div>
    //     );