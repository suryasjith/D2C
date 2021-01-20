import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../components/app';
import Sidebar from '../components/pages/shop/sidebar';
import NoSidebar from '../components/pages/shop/nosidebar';
import ProductCategory from '../components/pages/shop/product-category';
import MyAccount from '../components/pages/shop/dashboard';
import Wishlist from '../components/pages/shop/wishlist';
import Cart from '../components/pages/shop/cart';
import Checkout from '../components/pages/shop/checkout';
import Market from '../components/pages/shop/market';
import AdminRoute from '../auth/Helper/AdminRoute';
import admindashboard from '../components/pages/shop/admindashboard';
import PrivateRoute from '../auth/Helper/PrivateRoutes';

export default function ShopRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `/shop/category/:grid` } component={ ProductCategory } />
                <Route exact path={ `/shop/sidebar/:grid` } component={ Sidebar } />
                <Route exact path={ `/shop/nosidebar/:grid` } component={ NoSidebar } />
                <AdminRoute exact path={`/shop/admin/dashboard`} component = {admindashboard} />
                <Route exact path={ `/shop/market` } component={ Market } />
                <PrivateRoute exact path={ `/shop/dashboard` } component={ MyAccount } />
                <Route exact path={ `/shop/wishlist` } component={ Wishlist } />
                <Route exact path={ `/shop/cart` } component={ Cart } />
                <PrivateRoute exact path={ `/shop/checkout` } component={ Checkout } />
            </Layout>
        </Switch>
    );
}