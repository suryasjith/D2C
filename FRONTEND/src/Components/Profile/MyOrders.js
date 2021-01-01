import { Divider, Grid} from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'
import FooterSection from '../FooterSection/FooterSection'
import HeaderSection from '../Header/HeaderSection'
const MyOrders = () => {
    return (
        <div>
            <HeaderSection />
                <Divider />

            <Grid container>
                <Grid item xs/>
                    <Grid item xs={12} sm = {10} md ={8} >
                        <Grid item>
                            <Divider />
                                Order details here
                            <Divider />
                        </Grid>
                    </Grid>
                <Grid item xs/>
            </Grid>


            <FooterSection />
        </div>
    )
}

export default withRouter(MyOrders);