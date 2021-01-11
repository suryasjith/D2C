import React from 'react'
import { withRouter } from 'react-router-dom'
import Deals from '../Banners/DealsBanner'
import CardSection from '../Cards/CardSection'
import Base from './Base'

const Home = () => {
    return (
        <div>
            <Base>
            <Deals />
            <CardSection />
        
            </Base>
        </div>
    )
}
export default withRouter(Home);