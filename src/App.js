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
      name:[],
      id:[]
    }
    // this.handleClick.bind(this)
  }

  componentDidMount(){
    this.getWineList();
    this.postWineList()
    // this.deleteWine()
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
  
    postWineList() {
      axios.post('http://myapi-profstream.herokuapp.com/api/ee686f/wines')
        .then(response => {
          console.log(response);
          console.log(response.data)
        }).catch(error =>{
      })
  }
  deleteWine(){
    axios.delete('http://myapi-profstream.herokuapp.com/api/ee686f/wines')
      .then(response =>{
        console.log(response);
      }).catch(error => {
        console.log(error)
      })
  }


  handleSubmit(event){
    event.preventDefault();

  }
  render() {
    
    return (
      <div className="parent">
        <h1>Wine List</h1>
        <p>Use the form to input new wines</p>
        <form method="POST" action="http://myapi-profstream.herokuapp.com/api/ee686f/wines">
          <input type ="text" placeholder="Name of Wine" onChange={this.handleSubmit} />
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
          <button onSubmit={this.handleSubmit} type="submit" value="Submit">Submit</button>
          <button onDelete={this.deleteWine()}type ="delete" value="Delete">Delete</button>  
        </form>        
      </div>
    )
      
    } 
  }

