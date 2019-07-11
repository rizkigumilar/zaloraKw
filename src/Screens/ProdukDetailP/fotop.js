import React from 'react'
import './fotop.css'
import Deskripsi from '../ProdukDetailP/Descp'
import Data from '../../data/dataWomen'
import Order from '../ProdukDetailP/orderp'

function myFunction (smallimg) {
  var fullimg = document.getElementById('imageBox')
  fullimg.setAttribute('src', smallimg.target.src)
}
export default function foto (props) {
  let data = Data.find((item) => props.match.params.id === item.id)
  return (
    <div className='product'>
      <div className='product-small'>
        <img src={data.image_url} alt='jihyo' onMouseEnter={myFunction} />
        <img src={data.image_url2} alt='eunha' onMouseEnter={myFunction} />
        <img src={data.image_url3} alt='nancy' onMouseEnter={myFunction} />
        <img src={data.image_url4} alt='lisa' onMouseEnter={myFunction} />
      </div>

      <div className='img-container'>
        <img id={'imageBox'} src={data.image_url} alt='jihyo1' />
      </div>
      <div>
        <Deskripsi id={props.match.params.id} />
      </div>
      <div>
        <Order />
      </div>
    </div>
  )
}
