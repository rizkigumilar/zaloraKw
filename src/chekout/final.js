import React from 'react'
import '../chekout/final.css'

export default function address () {
  return (
    <div className='checkout'>
      <div className='logo'>
        <img src='https://marketing.co.id/wp-content/uploads/2017/11/Zalora-logo-black.png' className='zalora' alt='zalora' />
        <img src='https://static-id.zacdn.com/cms/cw22/996x57_LPDESKTOP_GRATISPENGIRIMANINDONESIA.jpg' className='ongkir' alt='ongkir' />
        <br />
      </div>
      <div className='header'>
        <p style={{ float: 'left' }}>LIHAT ULANG & CEK PESANAN</p> <p className='pesan'>Silakan lihat dan konfirmasi detail pesanan kamu.</p>
      </div>
      <div className='header2'>
        <p style={{ float: 'left' }}>ZALORA</p> <p className='free'>BIAYA PENGIRIMAN : GRATIS</p>
      </div>
      <div className='box'>
        <img style={{ float: 'left' }} src='https://dynamic.zacdn.com/OPBS2IfsFlNiUm3n4-mj6PiR5hQ=/fit-in/142x206/filters:quality(80):fill(ffffff)/http://static.id.zalora.net/p/exit-5176-4643391-1.jpg' alt='model' className='model' />
        <p className='pesan'><b>Exit</b></p>
        <p className='pesan1'>Rp 499.900</p>
        <br />
        <br />
        <p className='merek'>AUDRINA FLORAL TOP WITH SABRINA COLLAR</p>
      </div>
      <br />
      <div className='add'>
        <p>Jumlah:   1</p>
        <p>Warna:   Peach</p>
        <p>Ukuran:   International L</p>
      </div>
      <br />
      <div>
        <p className='h1'>Total: Rp 499.900</p>
        <p className='h1'>Pengiriman: Gratis</p>
        <p className='h1'><b>Jumlah Total: Rp 499.900</b></p>
        <br />
      </div>
      <br />
      <br />
      <br />
      <div className='button'>
        <button className='save'>PESAN</button>
      </div>
      <br />
      <br />
    </div>
  )
}
