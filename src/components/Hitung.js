import React, { useState } from 'react'


export default function Hitung() {

    const [jumlah, setJumlah] = useState(0);

    const tambahPengunjung = () => {
    // Update the state and log the latest jumlah value in the console
    setJumlah(jumlah + 1, console.log(`Jumlah pengunjung terbaru: ${jumlah+1}`));
  };


  return (
    <div>
        <p>Jumlah Pengunjung: {jumlah} orang </p>
        <button onClick={tambahPengunjung}>Tambah Pengunjung</button>
        {/* <button onClick={() => setJumlah(jumlah+1)}>Tambah Pengujung</button> */}
    </div>
  )
}

// import React, { Component } from 'react'

// export default class Hitung extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             jumlah: 0
//         }
//     }

//   render() {
//     const { jumlah } = this.state
//     return (
//       <div>
//         <p>Jumlah Pengunjung: {jumlah} orang </p>
//         <button onClick={() => this.setState({jumlah: jumlah+1})}>Tambah Pengujung</button>
//       </div>
//     )
//   }
// }
