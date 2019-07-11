import React from 'react'
import { Link } from 'react-router-dom'
import '../../Assets/product.css'
import Data from '../../data/dataMen'

function listMen () {
  let data = Data
  console.log(data)

  return (
    <div>
      <div className='list'>
        <div className='list-item'>
          {
            data.map(
              item => {
                return (
                  <Link to={`/men/detail/${item.id}`}>
                    <div className='item' id='items' productid={item.id}>
                      <img src={item.image_url} alt='gambar' />
                      <div>
                        <p className='barang'>{item.productName}</p>
                        <p className='desc'>{item.description}</p>
                        <p className='harga'>{item.productPrice}</p>
                      </div>
                    </div>
                  </Link>
                )
              }
            )
          }
        </div>
      </div>
      <div className='sidebar'>
        <h4>KATEGORI</h4>
        <label className='container'>Pakaian
          <input type='checkbox' checked='checked' />
          <span className='checkmark' />
        </label>

        <label className='container'>Sepatu
          <input type='checkbox' />
          <span className='checkmark' />
        </label>

        <label className='container'>Tas
          <input type='checkbox' />
          <span className='checkmark' />
        </label>

      </div>
    </div>
  )
}

export default listMen
