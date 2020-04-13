import React, { Component } from 'react'

export default class WineForm extends Component {
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
