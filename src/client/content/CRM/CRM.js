import React from 'react';
import * as s from './CRM.styles'; // bring in all the components from app.styles.js 
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'No.', width: 100 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,
        editable: true,


    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 130,
        editable: true,


    },
    {
        field: 'age',
        headerName: 'Age',
        width: 130,
        editable: true,
    },
    {
        field: 'signUpDate',
        headerName: 'Sign Up Date',
        width: 170,
        editable: true,
    },

    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
    //         }`,
    // },
];

const rows = [
    { id: 1, firstName: 'John', lastName: 'Anderson', age: 28, email: 'johnandy111@gmail.com', gender: 'M', signUpDate: '26/Mar/2021' },
    { id: 2, firstName: 'Jack', lastName: 'Zhang', age: 35, email: 'jackchina@gmail.com', gender: 'M', signUpDate: '26/Apr/2021' },
    { id: 3, firstName: 'Ben', lastName: 'Benny', age: 21, email: 'benben1@gmail.com', gender: 'M', signUpDate: '15/Sep/2021' },
    { id: 4, firstName: 'Eva', lastName: 'Clark', age: 22, email: 'evaclark123@gmail.com', gender: 'F', signUpDate: '11/Mar/2021' },
    { id: 5, firstName: 'John', lastName: 'Annister', age: 28, email: 'johna@gmail.com', gender: 'M', signUpDate: '16/May/2021' },
    { id: 6, firstName: 'Jimmy', lastName: 'Gibson', age: 18, email: 'jgibs98323@gmail.com', gender: 'M', signUpDate: '18/Dec/2020' },
    { id: 7, firstName: 'Shifeng', lastName: 'Zhang', age: 22, email: 'shifeng11@gmail.com', gender: 'M', signUpDate: '16/Nov/2021' },
    { id: 8, firstName: 'Elizabeth', lastName: 'Cooper', age: 24, email: 'elic96@gmail.com', gender: 'F', signUpDate: '03/Oct/2021' },
    { id: 9, firstName: 'Anna', lastName: 'Anderson', age: 27, email: 'anandy101@gmail.com', gender: 'F', signUpDate: '2/Apr/2021' },
    { id: 10, firstName: 'Donald', lastName: 'Trump', age: 99, email: 'trump@gmail.com', gender: 'M', signUpDate: '15/Mar/2020' },
    { id: 11, firstName: 'Joe', lastName: 'Biden', age: 105, email: 'joe@gmail.com', gender: 'M', signUpDate: '26/Jan/2021' },
    { id: 12, firstName: 'John', lastName: 'Higgs', age: 28, email: 'higgsj@gmail.com', gender: 'M', signUpDate: '26/Mar/2021' },
    { id: 13, firstName: 'Christina', lastName: 'Walfer', age: 44, email: 'johnandy111@gmail.com', gender: 'F', signUpDate: '25/Mar/2021' },
    { id: 14, firstName: 'John', lastName: 'Joe', age: 14, email: 'johnjjjj@gmail.com', gender: 'M', signUpDate: '24/Mar/2021' },
    { id: 15, firstName: 'Mohammed', lastName: 'Mohammed', age: 38, email: 'momo1@gmail.com', gender: 'M', signUpDate: '29/Mar/2021' },
    { id: 16, firstName: 'Xiaowen', lastName: 'Dan', age: 28, email: 'xxxdan@gmail.com', gender: 'F', signUpDate: '08/Feb/2020' },
    { id: 17, firstName: 'Junseok', lastName: 'Han', age: 70, email: 'junsh1@gmail.com', gender: 'M', signUpDate: '26/Dec/2021' },
    { id: 18, firstName: 'Minhee', lastName: 'Kim', age: 68, email: 'minh1@gmail.com', gender: 'F', signUpDate: '30/Aug/2021' },
    { id: 19, firstName: 'Shuhei', lastName: 'Yamamoto', age: 21, email: 'yama333@gmail.com', gender: 'M', signUpDate: '19/Nov/2021' },
    { id: 20, firstName: 'Jenna', lastName: 'Kilsby', age: 19, email: 'jennak99@gmail.com', gender: 'F', signUpDate: '01/Sep/2021' },



];

export default function CRM() {
    return (
        <div style={{ height: '80%', width: '100%', marginTop: '5%', marginLeft: '3%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}