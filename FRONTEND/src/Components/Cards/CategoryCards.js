import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Men from '../../Assets/Images/Men.jpg'
import Women from '../../Assets/Images/Women.jpg'
import Kid from '../../Assets/Images/Kid.jpg'
import Climate from '../../Assets/Images/Winter.jpg'
import { Button, Divider } from '@material-ui/core';





const images = [
    {
        url: Men,
        title: "Men's Fashion",
        width: '40%',
    },
    {
        url: Women,
        title: "Women's FAshion",
        width: '30%',
    },
    {
        url: Kid,
        title: "Kid's Fashion",
        width: '30%',
    },

    {
        url: Climate,
        title: 'Winter Fashion',
        width: '30%',
    }
    ,

    {
        url: Climate,
        title: 'Winter Fashion',
        width: '30%',
    },

    {
        url: Climate,
        title: 'Winter Fashion',
        width: '30%',
    }
    ,

    {
        url: Climate,
        title: 'Winter Fashion',
        width: '30%',
    },

    {
        url: Climate,
        title: 'Winter Fashion',
        width: '30%',
    },

    {
        url: Climate,
        title: 'Winter Fashion',
        width: '30%',
    },

    {
        url: Climate,
        title: 'Winter Fashion',
        width: '30%',
    },

    {
        url: Climate,
        title: 'Winter Fashion',
        width: '30%',
    }
];


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,

        width: '337px',
        height: '488px',
        backgroundRepeat: 'no-repeat',
        left: '27px',
        top: '993px',
    },
    button: {
        backgroundColor: "#ffffff",
        // alignContent : 'center',
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // top: 0,
        // bottom: 0,
        // display: 'flex',
        bottom: -250,
        // left: 'calc(50% - 9px)',
        alignItems: 'center',
        justifyContent: 'center'

    },
    heading: {
        position: 'relative',
        backgroundColor: "#875421",
        color: "#000",
        bottom: -240,
        // left: 'calc(50% - 9px)',
        alignItems: 'center',
        justifyContent: 'center',


    }
}));

const CategoryCards = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1} position="static">
                <Grid item xs={3} sm={1} md={2} xl={1} lg={1} />
                <Grid container xs={12} sm={10}>
                    {images.map((image) => (
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Paper className={classes.paper} elevation={3} style={{ backgroundImage: `url(${image.url})` }}>
                                <h3 className={classes.heading} >{image.title} <Divider /> </h3>
                                <Button className={classes.button}>Shop Now</Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={0} sm={1} />
            </Grid>
        </div>
    );
}

export default CategoryCards;