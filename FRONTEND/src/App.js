import React from 'react';
import HeaderSection from './Components/Header/HeaderSection';
import '@material-ui/core/'
import Deals from './Components/Banners/DealsBanner';
import CardSection from './Components/Cards/CardSection';
import MyDeal from './Components/Banners/MyDeals';
import FooterSection from './Components/FooterSection/FooterSection';
// import ReactDOM from 'react-dom';



const App = () => {
    return (
        <div>


            
            <HeaderSection />
            <Deals />
            <CardSection />
            <MyDeal />
            <FooterSection />
        </div>
    )
}

export default App;
