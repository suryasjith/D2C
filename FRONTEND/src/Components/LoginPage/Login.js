import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Signup() {
    const classes = useStyles();

    return (<div>
      
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-secondary" label="First Name" color="dark" /><br />
            <TextField id="standard-secondary" label="Last Name" color="dark" /><br />
            <TextField id="standard-secondary" type= "email" label="Email Id" color="dark" /><br />
            <TextField id="standard-secondary" type= "email" label="Confirm Email ID" color="dark" /><br />
            <TextField id="standard-secondary" label="Phone Number" color="dark" /><br /> 
            <TextField id="standard-secondary" type = "password" label="Enter New Password" color="dark" /><br />
            <TextField id="standard-secondary" type = "password" label="Re-enter the password" color="dark" />
            <div style = {{textAlign : "right"}}>
                
                
                <Button> Cancel </Button>
            <Button > Continue</Button></div>
            


            
        </form></div>
    );
}