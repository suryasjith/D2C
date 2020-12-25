import React from 'react';
import HeaderSection from './Components/Header/HeaderSection';
import '@material-ui/core/'
import Deals from './Components/Banners/DealsBanner';
import CardSection from './Components/Cards/CardSection';



const App = () => {
    return (
        <div>


            
            <HeaderSection />
            <Deals />
            <CardSection />
        
        </div>

    )
}

export default App;
