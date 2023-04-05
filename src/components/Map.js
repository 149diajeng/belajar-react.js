import React from 'react'

const minumans = [
    {
        nama: 'pop ice',
        harga: 5000
    },
    {
        nama: 'kopi es',
        harga: 4000
    },
    {
        nama: 'jus buah',
        harga: 7000
    },
    {
        nama: 'aqua',
        harga: 2000
    }
]

// Reduce
const total_bayar = minumans.reduce((total_harga, minuman) => {
    return total_harga+minuman.harga;
}, 0);

const Map = () => {
  return (
    <div>
        <h2>ini MAP sederhana dengan array minuman</h2>
        <ul>
            {minumans.map((minuman) => (
                <li> {minuman.nama} - Harga {minuman.harga} </li>
            ))} 
            
        </ul>

        <h2>ini 'Filter' harga yang lebih dari 3000</h2>
        <ul>
            {minumans
            .filter((minuman) => minuman.harga > 3000)
            .map((minuman) => (
                <li> {minuman.nama} - Harga {minuman.harga} </li>
            ))} 
            
        </ul>
{/* ini reduce */}
        <h2>ini 'reduce' Total Harga : {total_bayar} </h2>

    </div>
  )
}

export default Map