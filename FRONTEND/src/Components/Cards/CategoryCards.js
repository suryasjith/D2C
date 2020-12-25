import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '337px',
        height: '488px',
        left: '27px',
        // top: '993px',
    },
}));

const CategoryCards = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0} position = "static">
                <Grid item xs={0} sm={1} /> 
                <Grid container xs ={10}>
                    <Grid item xs={12} sm={3} lg={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>

                <Grid item xs={0} sm={1} />


            </Grid>
        </div>
    );
}

export default CategoryCards;