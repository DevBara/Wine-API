import React, { Component } from 'react'
import './App.css'
import axios from 'axios'



export default class App extends Component {
  constructor(props){
    super(props);
// set state to store info
//Reference Insomnia data flow
    this.state ={
      wines: '',
      name: "new wine",
      year: 1990,
      grapes: "",
      country: "",
      region: "",
      description: "something goes here",
      picture: "",
      price: 0,
    }
  }
  // Do I need to bind anything?

  

  getWine(){
    axios.get('http://myapi-profstream.herokuapp.com/api/db6de6/wines')
      .then(response => {
        console.log(response.data)
        console.log(response)
      }).catch(error =>{
        console.log(error)
      })
  }

  componentDidMount(){
    this.getWine();
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
