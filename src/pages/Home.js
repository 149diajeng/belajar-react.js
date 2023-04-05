import React, { Component } from 'react'
import Hitung from "../components/Hitung";

export default class 
 extends Component {
  render() {
    return (
      <div style={{padding: '100px'}}>
        <header>
            <h2>Aplikasi penghitung jumlah pengunjung Mall</h2>
            </header>   

            <hr />
            <Hitung />
            <hr/>
            
            <footer>
                <p>Created By Ajeng Fitrihandini</p>
            </footer>
      </div>
    )
  }
}
