import React, { Component } from 'react'

export default class Sublifecycle extends Component {

    componentWillUnmount () {
        this.props.gantiBuah ("Semangka")
    }

  render() {
    return (
      <div>Component Sub Lifecycle</div>
    )
  }
}
