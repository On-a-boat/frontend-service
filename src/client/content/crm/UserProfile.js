import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from 'react-router-dom'


const useStyles = makeStyles({
    table: {
        width: 550,
        position: 'absolute',
        right: 70,
        top: 20,
    },
});

const DetailTable = function ({ data }) {
    const classes = useStyles();

    return (
        <div className='table-container' style={{


        }}>
            <Table className={classes.table} >
                <TableRow>
                    <TableCell>User ID</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.userId}</span>)}
                    </TableCell>
                </TableRow>

                <TableRow >

                    <TableCell>First Name</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.firstName}</span>)}
                    </TableCell>
                </TableRow>


                <TableRow >
                    <TableCell>Last Name</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.lastName}</span>)}
                    </TableCell>
                </TableRow>

                <TableRow >
                    <TableCell>Age</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.age}</span>)}
                    </TableCell>
                </TableRow>

                <TableRow >
                    <TableCell>Gender</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.gender}</span>)}
                    </TableCell>
                </TableRow>

                <TableRow >
                    <TableCell>Email</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.email}</span>)}
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell>Phone Number</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.phoneNum}</span>)}
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell>Address</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.address}</span>)}
                    </TableCell>
                </TableRow>

                <TableRow >
                    <br />
                    <br />

                </TableRow>


                <TableRow>
                    <TableCell>User Name</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.username}</span>)}
                    </TableCell>
                </TableRow>

                <TableRow >
                    <TableCell>Sign Up Date</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.signDate}</span>)}
                    </TableCell>
                </TableRow>

                <TableRow >
                    <TableCell>Last Used</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.lastUsed}</span>)}
                    </TableCell>
                </TableRow>

                <TableRow >
                    <TableCell>No. used the app</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.freq}</span>)}
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell>Rating</TableCell>
                    <TableCell>
                        {data.map(d => <span>{d.rating}</span>)}
                    </TableCell>
                </TableRow>


            </Table>
        </div>
    );

}

// const useStyles = makeStyles({
//     table: {
//         width: 500,

//     },
// });


export default function UserProfile() {

    const [data, setData] = useState([]);
    const { a } = useParams();

    // Fetch users data from the Database.
    useEffect(() => {
        let isMounted = true;
        const getUser = async () => {
            try {

                const users = await axios.get('https://backend.weeyapp-crm-on-a-boat.com/filter/user?userId=' + a);

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
    return (<DetailTable data={data} />);

}



