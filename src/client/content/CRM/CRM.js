import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.UserId}</td>
    <td>{props.user.FirstName}</td>
    <td>{props.user.LastName}</td>
    <td>{props.user.Age}</td>
    <td>{props.user.Gender}</td>
    <td>{props.user.Keywords}</td>
  </tr>
)

export default class UsersList extends Component {
  constructor(props){
    super(props);
    this.state = {users: []};
  }
  componentDidMount(){
    axios.get('http://localhost:5000/filter')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  userList(){
    this.state.users.map((currentUser) => {
      return <User user1={currentUser}/>;
    })
  }

  render(){
    return(
      <div>
        <h3>Users List</h3>
        <table className ="table table-striped" style={{ margin: 100 }} >
        <thead>
          <tr>
            <th>UserId</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Keywords</th>
          </tr>
        </thead>
        <tbody>
          { this.userList() }
        </tbody>
        </table>
      </div>
    )
  }
}