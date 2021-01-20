import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from '../components/pages/others/404'

import LoadingOverlay from '../components/features/loading-overlay';

import { scrollTop } from '../utils';

const ElementPages = React.lazy( () => import( './elements-route.js' ) );
const ProductPages = React.lazy( () => import( './products-route.js' ) );
const ShopPages = React.lazy( () => import( './shop-route.js' ) );
const BlogPages = React.lazy( () => import( './blogs-route.js' ) );
const OtherPages = React.lazy( () => import( './others-route.js' ) );
const HomePage = React.lazy( () => import( './home-route.js' ) );

export default function AppRoot() {
    useEffect( () => {
        scrollTop();
    }, [] )

    return (
        <React.Suspense fallback={ <LoadingOverlay /> }>
            <Switch>
                <Route path={ `/elements` } component={ ElementPages } />
                <Route path={ `/product` } component={ ProductPages } />
                <Route path={ `/shop` } component={ ShopPages } />
                <Route path={ `/blog` } component={ BlogPages } />
                <Route path={ `/pages` } component={ OtherPages } />
                <Route path={ `/` } component={ HomePage } />
                {/* <Route  component = {ErrorPage} /> */}
            </Switch>
        </React.Suspense>
    )
}