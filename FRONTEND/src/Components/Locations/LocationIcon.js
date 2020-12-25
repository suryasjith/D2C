import { Button } from '@material-ui/core';
import React from 'react';
import LoIcon from '../../Assets/Images/room-24px.svg'



const LocationIcon = () => {
    return (
        <div style={{ textAlign: "right" }}>
            <Button variant="text" color="" aria-label="text primary button group" size="small">

                <img sizes="small" src={LoIcon} alt = "Location" />
                Location
                </Button>


        </div>
    )
}

export default LocationIcon;