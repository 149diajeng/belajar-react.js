import React, { Component } from 'react'
import Props from './Props';
// rcc = react class components
export default class StateProps extends Component {
  constructor (props) {
    super(props);
    this.state = {
        makanan : 'Bakso'
    }
  }  

gantiMakanan (makanan_baru) {
    this.setState({
        makanan: makanan_baru
    })
}

// operan props dari state
 render() {
    return (
        // JSX
      <div>
        <h2> {this.state.makanan} </h2>
        <button onClick={() => this.gantiMakanan("Rawon")}>Ganti Makanan</button>
        <Props makanan={this.state.makanan} />
      </div>
    )
  }
}


