import React from 'react'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import App from '../App'
import PageNotFound from '../Components/ErrorPage/PageNotFound'
import MyAddress from '../Components/Profile/My Address'
import MyOrders from '../Components/Profile/MyOrders'
import MyPayment from '../Components/Profile/MyPayment'
import MyProfile from '../Components/Profile/MyProfile'
import MyWishlist from '../Components/Profile/MyWishlist'
export default function Routes () {
    return (
        <div>
            <Router> 
                <Switch>
                    <Route exact path = "/" component = {App} />
                    <Route exact path = "/myprofile" component = {MyProfile} />
                    <Route exact path = "/mywishlist" component = {MyWishlist} />
                    <Route exact path = "/myorders" component = {MyOrders} />
                    <Route exact path = "/mypayment" component = {MyPayment} />
                    <Route exact path = "/myaddresses" component = {MyAddress} />
                    <Route exact component = {PageNotFound} />
                </Switch>
            </Router>
        </div>
    )
}
