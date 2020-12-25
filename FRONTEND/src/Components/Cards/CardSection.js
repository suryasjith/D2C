import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import CategoryCards from './CategoryCards';


const CardSection = () => {
    return(
        <div> <Divider />
        <Divider />
        <Grid style = {{
            paddingTop : "5px"
        }}/> 
        <CategoryCards />
        </div>
       
    )
}

export default CardSection ;