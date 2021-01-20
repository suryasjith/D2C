import React from 'react'
import { withRouter } from 'react-router-dom'
import Deals from '../Banners/DealsBanner'
import CardSection from '../Cards/CardSection'
import IntroBanner from '../Home/IntroBanner/IntroBanner'
import Base from './Base'

const Home = () => {
    return (
        <div>
            <Base>
            <Deals />
            <IntroBanner />
            <CardSection />
        
            </Base>
        </div>
    )
}
export default withRouter(Home);