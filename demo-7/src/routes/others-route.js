import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import AboutOne from '../components/pages/others/about-1';
import AboutTwo from '../components/pages/others/about-2';
import ContactOne from '../components/pages/others/contact-1';
import ContactTwo from '../components/pages/others/contact-2';
import FAQ from '../components/pages/others/faq';
import ComingSoon from '../components/pages/others/coming-soon';
import Login from '../components/pages/others/login';
import ErrorPage from '../components/pages/others/404';

export default function OthersRoute() {
    return (
        <Switch>
            <Route exact path={ `${process.env.PUBLIC_URL}/pages/coming-soon` } component={ ComingSoon } />

            <Layout>
                <Route exact path={ `/pages/about` } component={ AboutOne } />
                <Route exact path={ `/pages/about-2` } component={ AboutTwo } />
                <Route exact path={ `/pages/contact` } component={ ContactOne } />
                <Route exact path={ `/pages/contact-2` } component={ ContactTwo } />
                <Route exact path={ `/pages/login` } component={ Login } />
                <Route exact path={ `/pages/faq` } component={ FAQ } />
                <Route exact path={ `/pages/404` } component={ ErrorPage } />
            </Layout>
        </Switch>
    );
}