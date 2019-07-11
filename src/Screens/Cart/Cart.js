import React, { Component } from 'react';
class Cart extends Component {
    render() {
        return (
            <div>
                <div style={{ listStyleType: 'none', float: 'left', paddingLeft: '120px', paddingTop: '80px', width: '50%' }}>
                    <div style={{ backgroundColor: '#ccccb3', }}><li style={{ padding: '12px', }}><b>Dummy</b> <b style={{ float: 'right' }}>Dummy2</b></li></div>
                    <div style={{ backgroundColor: 'white', height: '500px', width: '676px' }}>
                        <div>
                            <label style={{ float: 'right', paddingTop: '20px' }}>dummy harga</label>
                            <div style={{ float: 'left', paddingTop: '20px', paddingLeft: '18px' }}>
                                <a href='#' style={{ textDecoration: 'none', color: 'black', }}>dummy brand</a>
                                <br />
                                <label>dummy product name</label>
                            </div>
                            <div style={{ paddingTop: '100px', paddingLeft: '30px' }}>
                                <img src='https://i.pinimg.com/564x/d3/2c/be/d32cbe69fdb987632431bcba29f78793.jpg' style={{ float: 'left', width: '80px' }} />
                                <ul style={{ float: 'left', paddingTop: '-100px', listStyleType: 'none' }}>
                                    <li><label>Jumlah </label></li>
                                    <br />
                                    <li><label>Ukuran </label></li>
                                    <li><label>Warna </label></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}
export default Cart;