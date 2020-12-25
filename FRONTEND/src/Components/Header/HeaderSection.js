import AppBar from './AppBAr';
import React from 'react';
import LoginButtonGroup from '../Buttons/Login-btn';
import CategoryTabs from '../Tabs/Category';
import LocationIcon from '../Locations/LocationIcon';
import { Divider } from '@material-ui/core';



const HeaderSection = () =>{
    return(
        <div>
            <LoginButtonGroup   />
            <AppBar />
            <LocationIcon />
            <Divider />
            
            <CategoryTabs />
        </div>
    )

}

export default HeaderSection;
