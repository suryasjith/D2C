// import src from '*.avif';
// import { Container, Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import React from 'react';
// import { Picture } from 'react-responsive-picture';
import deal from '../../Assets/Images/whitebgtry.jpg'




const Deals = () => {

    return (
        <div > 
            <Divider />
                <img position="static" width="100%" height="20%" src={deal} alt="Todays Deals" />
        </div>
    )
}

export default Deals;