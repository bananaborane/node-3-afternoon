import React, { Component } from 'react'
import axios from 'axios'

class Main extends Component {
constructor(){
    super();

    this.state = {
        data: []
    }
}

componentDidMount(){
    axios.get('/api/products')
    .then(res=>{
        console.log(res)
        this.setState({
            data: res.data
        })})
    .catch(err=>console.log(err))
    // refer to package.json
}

  render() {
    return (
      <div>
        {this.state.data.map((elem, i)=>{return ( <div key={i}>{elem.name}</div> )})}
      </div>
    )
  }
}

export default Main
