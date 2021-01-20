import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import Banners from '../components/pages/elements/banners';
import Buttons from '../components/pages/elements/buttons';
import Products from '../components/pages/elements/products';
import Typography from '../components/pages/elements/typography';
import Titles from '../components/pages/elements/titles';
import VideoBanners from '../components/pages/elements/video-banners';
import Categories from '../components/pages/elements/categories';
import Accordions from '../components/pages/elements/accordions';
import Tabs from '../components/pages/elements/tabs';
import Testimonials from '../components/pages/elements/testimonials';
import BlogPosts from '../components/pages/elements/blog-posts';
import Portfolios from '../components/pages/elements/portfolios';
import CTA from '../components/pages/elements/cta';
import IconBoxes from '../components/pages/elements/icon-boxes';
import ElementList from '../components/pages/elements/element-list';

export default function ElementsRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `/elements/banners` } component={ Banners } />
                <Route exact path={ `/elements/buttons` } component={ Buttons } />
                <Route exact path={ `/elements/products` } component={ Products } />
                <Route exact path={ `/elements/typography` } component={ Typography } />
                <Route exact path={ `/elements/titles` } component={ Titles } />
                <Route exact path={ `/elements/categories` } component={ Categories } />
                <Route exact path={ `/elements/video-banners` } component={ VideoBanners } />
                <Route exact path={ `/elements/accordions` } component={ Accordions } />
                <Route exact path={ `/elements/tabs` } component={ Tabs } />
                <Route exact path={ `/elements/testimonials` } component={ Testimonials } />
                <Route exact path={ `/elements/blog-posts` } component={ BlogPosts } />
                <Route exact path={ `/elements/portfolios` } component={ Portfolios } />
                <Route exact path={ `/elements/cta` } component={ CTA } />
                <Route exact path={ `/elements/icon-boxes` } component={ IconBoxes } />
                <Route exact path={ `/elements` } />
                <ElementList />
            </Layout>
        </Switch>
    );
}