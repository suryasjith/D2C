import { Button, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { v4 } from 'uuid'
import FooterSection from '../FooterSection/FooterSection'
import HeaderSection from '../Header/HeaderSection'
  const content = [
        {
            id: uuid(v4),
            title: "My Addresses",
            description : "Edit your Addresses here  and add new",
            url : "/myaddresses"
        },
        {
            id: uuid(v4),
            url : "/myorders",
            title: "My Orders",
            description : "Manage and cancel your orders"
        },
        {
            id: uuid(v4),
            url : "/mywishlist",
            title: "My Wishlist",
            description : "Manage and place your items "
        },
        {
            id: uuid(v4),
            url : "/myaddresses",
            title: "My Payment Methods",
            description : "Add or remove payment method"
        },
        {
            id: uuid(v4),
            url : "/myloginedit",
            title: "Login & Security",
            description : "Edit login credentials"
        },
        {
            id: uuid(v4),
            url : "/myrewards",
            title: "My Rewards",
            description : "View and redeem your rewards"
        },
    ]
export default function MyProfile() {




    return (
        <div>
            <HeaderSection />
            <Grid container>
                <Grid item xs />
                <Grid item xs>
                    <Grid item xs={12} sm={4} >
                        {content.map((content)=>(<Grid>
                            <Paper id = {content.id} elevation ={3}>
                            <h3 >
                                {content.title}
                            </h3>
                            <p>
                                {content.description}
                            </p>
                            <Button >
                                    View
                            </Button>
                            </Paper>
                        </Grid>))}
                        
                    </Grid>
                        
                </Grid>
                <Grid item xs />
            </Grid>
            <FooterSection />
        </div>
    )
}
