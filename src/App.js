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
        this.setState({
          wines:response.data
        })
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
        
        <p>Use the form to input new wines</p>
        <form action="https://myapi-profstream.herokuapp.com/api/ee686f/wines">
          <input type ="text" name="description" placeholder="wine name" />
          <input type ="text" placeholder="Name of Wine" />
          <input type ="id" placeholder="ID" />
          <select type ="text" name="years">
              <option>Wine Year</option> 
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
              <option>2003</option>
              <option>2004</option>
              <option>2005</option>
              <option>2006</option>
              <option>2007</option>
          </select>
          <input type ="text" placeholder="Grape Type" />
          <input type ="text" placeholder="Country" />
          <input type ="text" placeholder="Region" />
          <input type ="text" placeholder="Description" />
          <input type ="text" placeholder="Price" />

          <button type="submit">Submit New Wine</button>
          <button type="submit">Delete A Wine</button>
        </form>
      </div>
      
    )
  }
}
