import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Divider, Grid } from '@material-ui/core';
import Signup from '../LoginPage/Signup';
import { Link, withRouter, useHistory } from 'react-router-dom';
import Login from '../LoginPage/Login';
import { signout, isAuthenticated } from '../auth/Helper';



const useStyles = makeStyles((theme) => ({
    root: {

        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'right',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    dropdown: {
        position: 'fixed',
        width: 200,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));


const LoginButtonGroup = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    let history = useHistory();
    return (
        <div className={classes.root} style={{ textAlign: "right" }}>
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group" size="small">
                        <Link to="/admin/dashboard">
                            <Button   >Hi {isAuthenticated().user.name}</Button>
                        </Link>
                        <Button onClick={() => {
                        signout(() => {
                            history.push('/')
                        })
                    }}  >Sign Out</Button>
                    </ButtonGroup>
                </>
            )}
            {isAuthenticated()  && isAuthenticated().user.role === 0 && (<>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group" size="small">
                    <Link to="/user/dashboard">
                        <Button   >Hi {isAuthenticated().user.name}</Button>
                    </Link>
                    <Link to="/cart">
                        <Button   >{isAuthenticated().user.name}'s cart</Button>
                    </Link>
                    <Button onClick={() => {
                        signout(() => {
                            history.push('/')
                        })
                    }}  >Sign Out</Button>
                </ButtonGroup> </>)}
            {!isAuthenticated() && (<>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group" size="small">
                    <Button onClick={handleClickOpen}  >Sign in</Button>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title" >
                        <Grid container >
                            <Grid item xs={12} >
                                <Button onClick={handleClose}>Cancel</Button>
                                <DialogContent>
                                    <Login />
                                </DialogContent>
                            </Grid>
                            <br /> <br />
                            <Grid item xs={12} >
                                <Divider variant="middle" />
                                <DialogContent>
                                    <DialogContentText>
                                        <Signup />
                                    </DialogContentText>
                                </DialogContent>
                            </Grid>
                        </Grid>
                    </Dialog>
                    <Button onClick={handleClickOpen}>Sign Up</Button>
                </ButtonGroup>   </>
            )}
        </div>
    );
}

export default withRouter(LoginButtonGroup);