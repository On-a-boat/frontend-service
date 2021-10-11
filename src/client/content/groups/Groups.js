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











































































































































































































































































