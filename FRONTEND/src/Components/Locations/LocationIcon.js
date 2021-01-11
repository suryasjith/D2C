import { Button } from '@material-ui/core';
import React from 'react';
import LoIcon from '../../Assets/Images/room-24px.svg'



const LocationIcon = () => {
    return (
        <div style={{ textAlign: "right" ,color : "white"}}>
            <Button variant="text" color="white" aria-label="text primary button group" size="small">

                <img sizes="small" color = "#ffffff" src={LoIcon} alt = "Location" />
                <span style={{ textAlign: "right",
             fontFamily: 'Nova Flat'}} >
                      Location
                </span>
              
                </Button>


        </div>
    )
}

export default LocationIcon;