import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import GetWine from './components/GetWine'
import PostWine from './components/PostWine'



export default class App extends Component {

//Getting status code 404 
//How do we delete a specific wine? Use Id? since ID is unique?
//records not deleting

deleteWine(){
  axios.delete('http://myapi-profstream.herokuapp.com/api/db6de6/wines')
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    });
  }

  render() {
    return (
      <div>
        <PostWine />
        <GetWine /> 
      </div>
      
      
    )
  }
}
