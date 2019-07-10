import React from 'react'
import './foto.css'
import Deskripsi from './Desc'

function myFunction (smallimg) {
  var fullimg = document.getElementById('imageBox')
  fullimg.setAttribute('src', smallimg.target.src)
}
export default function foto () {
  return (
    <div className='product'>
      <div className='product-small'>
        <img src='https://i.pinimg.com/564x/89/ad/88/89ad88465871a75d0fbe0d4e5c89f5bd.jpg' alt='jihyo' onMouseEnter={myFunction} />
        <img src='https://kpopping.com/uploads/documents/kpics_gallery-kept/60179.jpeg' alt='eunha' onMouseEnter={myFunction} />
        <img src='https://static.asiachan.com/Nancy.600.150226.jpg' alt='nancy' onMouseEnter={myFunction} />
        <img src='https://i.pinimg.com/474x/fa/90/c3/fa90c3fa20e8fcc74ea09bd20cc41d89.jpg' alt='lisa' onMouseEnter={myFunction} />
        <img src='https://i.pinimg.com/564x/84/3d/ce/843dce91c790c4c93cc3d5e40dfa2634.jpg' alt='nana' onMouseEnter={myFunction} />
      </div>

      <div className='img-container'>
        <img id={'imageBox'} src='https://i.pinimg.com/564x/89/ad/88/89ad88465871a75d0fbe0d4e5c89f5bd.jpg' alt='jihyo1' />
      </div>
      <div>
        <Deskripsi />
      </div>
    </div>
  )
}
