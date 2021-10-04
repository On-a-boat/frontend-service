import React ,{ Component } from "react";
import axios from 'axios';
import * as s from './CRM.styles'; // bring in all the components from app.styles.js 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: "",
      FirstName: "",
      LastName: "",
      Age: "",
      Gender: "",
      Keywords: [],
    };
  }

  //GET Request
  handleOnSearch(){
    axios.get(`http://localhost:5000/filter`,{
      params: {
        id: this.state.id
      }
    })
    .then(res => {
      console.log(this.state.persons);
      this.setState({ persons: res.data });
    });
  }

  render(){
	  return (<h1>test1 </h1>);
  }
}

export default App;