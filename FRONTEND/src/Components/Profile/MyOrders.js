import { Divider, Grid, Paper } from '@material-ui/core'
import React from 'react'
import FooterSection from '../FooterSection/FooterSection'
import HeaderSection from '../Header/HeaderSection'

export default function MyOrders() {
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
