import React from 'react'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import AdminRoute from '../Components/auth/Helper/AdminRoute'
import PrivateRoute from '../Components/auth/Helper/PrivateRoutes'

import Home from '../Components/Core/Home'
import PageNotFound from '../Components/ErrorPage/PageNotFound'
import AdminProfile from '../Components/Profile/AdminProfile'
// import MyAddress from '../Components/Profile/My Address'
// import MyOrders from '../Components/Profile/MyOrders'
// import MyPayment from '../Components/Profile/MyPayment'
import MyProfile from '../Components/Profile/MyProfile'
import MyWishlist from '../Components/Profile/MyWishlist'
export default function Routes () {
    return (
        <div>
            <Router> 
                <Switch>
                    <Route exact path = "/" component = {Home} />
                
                    <Route exact path = "/mywishlist" component = {MyWishlist} />
                    <AdminRoute exact path = "/admin/dashboard" component = {AdminProfile} />
                    <PrivateRoute exact path = "/user/dashboard" component = {MyProfile} />
                    {/* <PrivateRoute  exact path = "/myaddresses" component = {MyAddress} />
                    <PrivateRoute   exact path = "/mypayment" component = {MyPayment} />
                    <PrivateRoute  exact path = "/orders" component = {MyOrders}/> */}

                    <Route exact component = {PageNotFound} />
                </Switch>
            </Router>
        </div>
    )
}
