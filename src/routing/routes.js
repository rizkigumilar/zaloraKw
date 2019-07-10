import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Head from '../Components/HomePage/Zalora';
import Profile from '../Screens/User/user'
import ProdukDetail from '../Screens/ProdukDetail/foto'
import listwomen from '../Screens/product/womenProduct'
import listmen from '../Screens/product/MensProduct'
import Promo from '../Components/HomePage/promo'
import BestSeller from '../Components/HomePage/bestSeller'
import Highlight from '../Components/HomePage/highlight'
import Trendings from '../Components/HomePage/nowTrendings'
import Footer from '../Components/HomePage/footer'
class Routing extends Component {
    render() {
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
                <Route exact path='/women/detail/:id' component={ProdukDetail} />
                <Route path='/profile' component={Profile}/>

            </Router>
        )
    }
}

export default Routing;