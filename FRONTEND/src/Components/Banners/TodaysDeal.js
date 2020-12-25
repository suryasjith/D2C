import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TDeal from '../../Assets/Images/delas.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const DealToday = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

                <Grid container spacing = {12}>
                <Grid item xs={12}>

                    <Paper className = {classes.paper}>
            <img position= "static" width = "100%" height =  "20%" src= {TDeal}  alt = "Todays Deals"/>

                    </Paper>
                    </Grid>
                </Grid> 

        </div>
    )
}

export default DealToday;