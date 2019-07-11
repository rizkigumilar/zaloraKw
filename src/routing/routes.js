import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Head from '../Components/HomePage/Zalora';
import Profile from '../Screens/User/user'
import Akun from '../Screens/User/akun'
import Maintanance from '../Screens/User/Maintanace'
import ProdukDetail from '../Screens/ProdukDetail/foto'
import listwomen from '../Screens/product/womenProduct'
import listmen from '../Screens/product/MensProduct'
import Promo from '../Components/HomePage/promo'
import BestSeller from '../Components/HomePage/bestSeller'
import Highlight from '../Components/HomePage/highlight'
import Trendings from '../Components/HomePage/nowTrendings'
import Footer from '../Components/HomePage/footer'
import ProdukDetailP from '../Screens/ProdukDetailP/fotop'
import catlistwomen from '../Screens/product/FilterPakaianWomen'
import catlistwomen2 from '../Screens/product/FilterSepatuWoman'
import catlistmen from '../Screens/product/FilterPakaianPria'
import catlistmen2 from '../Screens/product/FilterSepatuPria'
import cart from '../Screens/Cart/Cart'

class Routing extends Component {
  render () {
    return (
      <Router>
        <Route path='/' component={Head} />
                <Route exact path='/' component={Promo} />
                <Route exact path='/' component={BestSeller} />
                <Route exact path='/' component={Highlight} />
                <Route exact path='/' component={Trendings} />
                <Route exact path='/' component={Footer} />
                <Route exact path='/men' component={listmen} />
                <Route exact path='/women/' component={listwomen} />
                <Route exact path='/women/pakaian' component={catlistwomen} />
                <Route exact path='/women/sepatu' component={catlistwomen2} />
                <Route exact path='/men/pakaian' component={catlistmen} />
                <Route exact path='/men/sepatu' component={catlistmen2} />
                <Route exact path='/men/detail/:id' component={ProdukDetail} />
                <Route exact path='/women/detail/:id' component={ProdukDetailP} />
                <Route exact path='/checkout' component={cart} />
                <Route path='/profile' component={Profile} />
                <Route exact path='/profile' component={Akun} />
                <Route path='/profile/akun' component={Akun} />
                <Route path='/profile/maintanance' component={Maintanance} />
            </Router>
        )
    }

}

export default Routing
