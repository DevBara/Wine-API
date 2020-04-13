import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import GetWine from './components/GetWine'
import PostWine from './components/PostWine'



export default class App extends Component {

//Getting status code 404 
//How do we delete a specific wine? Use Id? since ID is unique?

deleteWine(){
  axios.delete('http://myapi-profstream.herokuapp.com/api/ee686f/wines')
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    });
  }

  render() {
    return (
      <div>
        <GetWine /> 
        <PostWine />
      </div>
      
      
    )
  }
}
