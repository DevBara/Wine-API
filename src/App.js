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
    const response = await axios.get('https://myapi-profstream.herokuapp.com/api/ee686f/wines')
    console.log(response);
  } catch(e){
    console.log(e);
  }

  render() {
    return (
      <div>

        <form>
          <input type ="text" name="description" placeholder="wine name" />
          
          <button type="submit">Submit</button>
        </form>
        
      </div>
    )
  }
}
