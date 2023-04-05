import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export class Lifecycle extends Component {
constructor(props) {
  super(props)

  this.state = {
     buah : 'Jeruk',
     data: {},
     tampilHalamanSub: false,

  }
}

// belajar test fake API untuk latihan nyambung ke backend
// ini sudah fix, bisa tersimpan dan tampil di console
// belajar di ytb wahidev academy

componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((json) => {
        this.setState({
            data : json
        })
        // console.log("Halo Ajeng :", json);
      })
}

gantiBuah(value) {
    this.setState({
        buah: value
    })
}

  render() {
    console.log("Data :", this.state.data);
    return (
      <div>
        {/* <h3> {this.state.data.title} </h3> */}
        <h2>{this.state.buah} </h2>
        {this.state.tampilHalamanSub && <Sublifecycle gantiBuah={(value) => this.gantiBuah(value)} /> }
        <button onClick={ () => this.setState( {tampilHalamanSub: !this.state.tampilHalamanSub})}>Tampilkan Halaman Sub</button>

      </div>
    )
  }
}

export default Lifecycle