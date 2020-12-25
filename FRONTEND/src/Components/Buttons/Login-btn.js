import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'right',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const  LoginButtonGroup = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} style = {{textAlign : "right"}}>
            {/* <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group" size = "small">
                <Button>Log In</Button>
                <Button>Sign Up</Button>
               
            </ButtonGroup>
        </div>
    );
}

export default LoginButtonGroup;