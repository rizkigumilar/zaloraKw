import React from 'react'
import './Desc.css'

export default function Desc () {
  return (
    <div className='desc'>
      <div className='brand'>
        <p>Vouge</p>
        <p className='type'>Oversized Cropped Denim Jacket</p>
      </div>

      <div className='material'>
        <p className='price' >Rp 907.000</p>
        <ul type='square' className='list'>
          <li>Solid shade cropped denim jacket</li>
          <li>Collared neckline</li>
          <li>Unlined</li>
          <li>Relaxed fit</li>
          <li>Front button fastening</li>
          <li>Cotton blend</li>
        </ul>
      </div>

      <div className='refund'>
        <p>Pengiriman Nominal Tertentu <button className='send'>Gratis*</button></p>
        <br />
        <p>30 HARI PENGEMBALIAN <button className='send'>Gratis*</button></p>
        <br />
        <p>CASH ON DELIVERY <button className='send'>Tersedia*</button></p>
        <br />
        <br />
        <br />
      </div>

      <div className='seller'>
        <p>DIJUAL OLEH <i>ZALORA</i></p>
        <br />
      </div>

      <div className='diliver'>
        <p>Pengiriman dari: <button className='send'>Luar Negeri</button></p>
        <br />
        <p>Total pemesanan produk luar negeri <br /> di atas  Rp 1,000,000 dikenakan biaya tambahan</p>
        <br />
      </div>
      <div className='time'>
        <p>ESTIMASI PENGIRIMAN</p>
        <i>Jabodetabek 5-7 hari kerja, luar </i>
        <br />
        <i>Jabodetabek 7-12 hari kerja</i>
        <br />
        <i><b>Produk ini dikirim terpisah</b></i>
        <br />
        <br />
      </div>

      <div className='check'>
        <p>CEK ESTIMASI PENGIRIMAN</p>
        <br />
        <input type='text' id='search' placeholder='Masukan kota di sini' />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
