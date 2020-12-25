// import src from '*.avif';
// import { Container, Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import React from 'react';
// import { Picture } from 'react-responsive-picture';
import deal from '../../Assets/Images/New Project (4).jpg'
import DealToday from './TodaysDeal';



const Deals = () => {

    return (
        <div >   <DealToday />
            <Divider />
            <img position="static" width="100%" height="20%" src={deal} alt="Todays Deals" />






        </div>



    )

}

export default Deals;