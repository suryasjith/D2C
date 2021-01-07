import { Divider, Grid } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'
import Base from '../Core/Base'


const MyAddress = () => {
    return (
        <div>
            <Base>
                <Grid container>
                    <Grid item xs />
                    <Grid item xs={12} sm={10} md={8} >
                        <Grid item>
                            <Divider />
                                Addressess
                        <Divider />
                        </Grid>
                    </Grid>
                    <Grid item xs />
                </Grid>

            </Base>   </div>




    )
}

export default withRouter(MyAddress);
