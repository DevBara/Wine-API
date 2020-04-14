import React, { Component } from 'react'
import axios from 'axios'

export default class GetWine extends Component {
    constructor(props){
        super(props);
    // set state to store info
    //Reference Insomnia data flow
        this.state ={
          wines: [],
          id: 0,
          name: "null",
          year: 1980,
          grapes: "",
          country: "",
          region: "",
          description: "something goes here",
          picture: "",
          price: 0,
        }
      }

      getWine(){
        axios.get('http://myapi-profstream.herokuapp.com/api/ee686f/wines')
          .then(response => {
            this.setState({
              wines:response.data
            })
            console.log(response)
          }).catch(error =>{
            console.log(error)
          })
      }

      componentDidMount(){
          this.getWine()
      }



    render() {
        return (
            <div>
            {
                this.state.wines.map((wine) => (
                    <div className='wineKid' key={wine.id}>
                        <ul>
                            <li key ={wine.id}> {wine.name} {wine.grapes}</li>
                        </ul>
                    </div>
                ))
            })
            </div>
        )
    }
}
