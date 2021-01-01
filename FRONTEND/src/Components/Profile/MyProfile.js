import { Button, Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import FooterSection from '../FooterSection/FooterSection'
import HeaderSection from '../Header/HeaderSection'
const content = [
    {
        // id: uuid(v4),
        title: "My Addresses",
        description: "Edit your Addresses here  and add new",
        url: "/myaddresses"
    },
    {
        // id: uuid(v4),
        url: "/myorders",
        title: "My Orders",
        description: "Manage and cancel your orders"
    },
    {
        // id: uuid(v4),
        url: "/mywishlist",
        title: "My Wishlist",
        description: "Manage and place your items "
    },
    {
        // id: uuid(v4),
        url: "/myaddresses",
        title: "My Payment Methods",
        description: "Add or remove payment method"
    },
    {
        // id: uuid(v4),
        url: "/myloginedit",
        title: "Login & Security",
        description: "Edit login credentials"
    },
    {
        // id: uuid(v4),
        url: "/myrewards",
        title: "My Rewards",
        description: "View and redeem your rewards"
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "200px",
        width: "300 px"
    },
}));
const MyProfile = () => {

    const classes = useStyles()


    return (



        <div className={classes.root}>
            <HeaderSection />
            <Grid container spacing={0} position="static">
                <Grid item xs>
                </Grid>
                <Grid container xs={11} spacing={4} >
                    {content.map((content) => (
                        <Grid item xs={12} sm={4} md={4} lg={3}>
                            <Paper className={classes.paper} id={content.id} elevation={3}>
                                <h4 >
                                    {content.title}
                                </h4>
                                <p>
                                    {content.description}
                                </p>
                                <Link to={content.url}>
                                    <Button >
                                        View
                                </Button>
                                </Link>

                            </Paper>
                            <br />
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
            <FooterSection />
        </div>
    )
}
export default withRouter(MyProfile);