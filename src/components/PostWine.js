import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    constructor(props){
      super(props);
  // set state to store info
  //Reference Insomnia data flow
      this.state ={
        id: 0,
        name: "",
        year: 1980,
        grapes: "",
        country: "",
        region: "",
        description: "something goes here",
        picture: "",
        price: 0,
      }
    }
    // Do I need to bind anything?
  
//   Can we connect Post to a form?
//   From research is Post supported on HTML5 if attached to a form?
    newWine(){
      axios.post('http://myapi-profstream.herokuapp.com/api/ee686f/wines',{
        wines: '',
        // name: "New wine",
        // year: 2004,
        // grapes: "Italian",
        // country: "USA",
        // region: "South",
        // description: "Pairs well with steak",
        // picture: "nnnnn",
        // price: 75,   
    })
      .then(response => {
        console.log(response)
    }).catch(error =>{
      console.log(error)
    });
     
   }

    render() {
        return (
             <div>

            <p>Use the form to input new wines</p>
            <input type ="text" placeholder="Name of Wine" />
            {/* <input type ="id" placeholder="ID" /> */}
            <select type ="text" name="year">
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
            <div>
                {/* on click of submit- data needs to go to Wine API-Post Request */}
                <button type="submit">Submit New Wine</button>
                {/* On click on delete- data needs to be removed from Wine API
                -Delete Request -event that links to delete request*/}
                <button type="submit">Delete A Wine</button>
        </div>
      </div>

        )
    }
}
