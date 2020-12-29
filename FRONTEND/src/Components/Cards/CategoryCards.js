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
    
];


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        paddingInline : "5px",
        textAlign: 'center',
        color: theme.palette.text.secondary,

        width: '337px',
        height: '488px',
        backgroundRepeat: 'no-repeat',
        left: '27px',
        top: '993px',
    },
    paper1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
        <div  className={classes.root}>
            <Grid container spacing={0} position="static">
                <Grid item xs>
                    </Grid>
                <Grid container xs={11} >
                    {images.map((image) => (
                        <Grid item xs = {12} sm={6} md ={4} lg ={3}>
                            <Paper className={classes.paper} elevation={3} style={{ backgroundImage: `url(${image.url})` }}>
                                <h3 className={classes.heading} >{image.title} <Divider /> </h3>
                                <Button className={classes.button}>Shop Now</Button>
                            </Paper>
                            <br />
                            </Grid>
                        
                    ))}
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </div>
    );
}

export default CategoryCards;