import React, { Component } from 'react';
import callApi from '../services/hit-dat-backend';

class Results extends Component{
  constructor(props){
    super(props);

    callApi().then(results=>{
      console.log(results);
      this.state = {
        results: results
      }
    })
  }
  render() {
    return <h1>HELLO</h1>
  }
}

export default Results;
