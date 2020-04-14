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
          name: "",
          year: 1980,
          grapes: "",
          country: "",
          region: "",
          description: "",
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
            
          }).catch(error =>{
            console.log(error)
          })
      }

      componentDidMount(){
          this.getWine()
      }


//Must we render in ul & li?
//map function 
    render() {
        return (
            <div>
            {
                this.state.wines.map((wine) => (
                    <div className='wineKid' key={wine.id}>
                            <p>
                                <img key={wine.id} src={wine.picture} alt ='wine bottle'/>
                            </p>
                            <p key ={wine.id}>
                                {wine.name}       
                            </p>
                       
                    </div>
                ))
            })
            </div>
        )
    }
}
