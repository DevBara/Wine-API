import React, { Component } from 'react'
import axios from 'axios'


//Page is displaying whole wine list once button click
//once page loads from submit, it does not go back to default/home
//have to exit out and go back in

export default class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      data: [],
    }
    this.handleClick.bind(this)
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
  
    handleClick() {
      axios.post('http://myapi-profstream.herokuapp.com/api/ee686f/wines',{
      "id":'',
      "name": "",
      "year": '',
      "grapes": "",
      "country": "",
      "region": "",
      "description": "",
      "picture": "",
      "price": '',
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
          
          <button onClick={this.handleClick}type="submit">Submit</button>
        </form>
        
      </div>
    )
      
    } 
  }

