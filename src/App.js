import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      data: []
    }
  }

  async componentDidMount() {
    const response = await axios.get('http://myapi-profstream.herokuapp.com/api/ee686f/wines')
    console.log(response);
  } catch(e){
    console.log(e);
  }

  render() {
    return (
      <div className="parent">
        <h1>Wine List</h1>
        <p>Use the form to input new wines</p>
        <form action="https://myapi-profstream.herokuapp.com/api/ee686f/wines">
          <input type ="text" name="description" placeholder="wine name" />
          
          <button type="submit">Submit</button>
        </form>
        
      </div>
    )
  }
}
