import React, { Component } from 'react'

export default class Props extends Component {
// gantiMakanan (makanan_baru) {
//     this.setState({
//         makanan: makanan_baru
//     })
// }


  render() {
    return (
      <div>
        <h2>Operan State yang menjadi Props : {this.props.makanan} </h2>
        {/* <button onClick={() => this.gantiMakanan("Bihun")}>button dg props</button> */}
      </div>
    )
  }
}
