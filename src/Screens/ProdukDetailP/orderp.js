import React from 'react'
import './orderp.css'

export default function order () {
  return (
    <div className='order'>
      <p className='size'>PILIH UKURAN</p>
      <p className='detail'>Anda tidak yakin? Lihat Detail Ukuran</p>
      <br />
      <p className='much'>One size</p>
      <p className='slod'>Saat ini tersedia</p>
      <br />
      <button className='pesan'>Pesan</button>
      <br />
      <button className='wish'>TAMBAHKAN KE WISHLIST</button>
    </div>
  )
}
