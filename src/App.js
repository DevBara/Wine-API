import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      data: [],
    }
  }
    getWineList(){
      axios.get('http://myapi-profstream.herokuapp.com/api/ee686f/wines')
    .then(response => {
      this.setState({data: response.data })
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
  }
  
    postNewWine() {
      axios.post('http://myapi-profstream.herokuapp.com/api/ee686f/wines',{
      "name": "test",
      "year": 2009,
      "grapes": "sour",
      "country": "USA",
      "region": "Triple D",
      "description": "The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",
      "picture": "",
      "price": 23,
    })
      .then(response => {
      }) .catch(error =>{
    })
  }

   
      

  render() {
  
    const {data}=this.state;
    
    return (
      <div className="parent">
        <h1>Wine List</h1>
        <p>Look here: {data}</p>
        <p>Use the form to input new wines</p>
        <form action="https://myapi-profstream.herokuapp.com/api/ee686f/wines">
          <input type ="text" name="description" placeholder="wine name" />
          
          <button type="submit">Submit</button>
        </form>
        
      </div>
    )
      
    } 
  }

