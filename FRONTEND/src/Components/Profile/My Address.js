import { Grid } from '@material-ui/core'
import React from 'react'
import FooterSection from '../FooterSection/FooterSection'
import HeaderSection from '../Header/HeaderSection'

export default function MyAddress() {
    return (
        <div>
            <HeaderSection />
            <Divider />

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
            <FooterSection />
        </div>
    )
}
