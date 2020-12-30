import React from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Divider, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Signup from '../LoginPage/Login';
import SearchAppBar from '../Header/AppBAr';


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
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleSubmit = () => {
        // your submit logic
    }

    return (
        <div className={classes.root} style={{ textAlign: "right" }}>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group" size="small">
            <Button   >Hi User</Button>
            <Button onClick={handleClickOpen}  >Log In</Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <SearchAppBar />
                    <Grid container >
                        <Grid item xs={12} sm={5}>
                            <DialogTitle id="responsive-dialog-title">{"Login"}</DialogTitle>
                            <Divider variant="middle"/>
                            <form onSubmit={handleSubmit}  >
                                <DialogContent>
                                    <DialogContentText>
                                        <FormControl className={classes.margin}>
                                            <TextField
                                                required
                                                id="standard"
                                                label="Username"
                                                type="text"
                                                autoComplete="disable"
                                            />
                                        </FormControl>
                                        <br />
                                        <FormControl className={clsx(classes.margin, classes.textField)}>
                                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                            <Input
                                                id="standard-adornment-password"
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                onChange={handleChange('password')}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button size="small" type="submit" onClick={handleClose} autoFocus color="dark">
                                        Forgotten password?
                                </Button>
                                    <Button type="submit" onClick={handleClose} autoFocus color="dark">
                                        Cancel
                                </Button>
                                    <Button color="dark" autoFocus>
                                        Login
                                </Button>
                                </DialogActions>
                            </form> 

                        </Grid><Grid item  xs = {1}><Divider orientation="vertical" flexItem /></Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <DialogTitle id="responsive-dialog-title">{"Create Account"}</DialogTitle>
                            <Divider variant="middle"/>
                            <DialogContent>
                                <DialogContentText>
                                    <Signup/>
                                </DialogContentText>
                            </DialogContent>
                        </Grid>
                    </Grid>
                </Dialog>
                <Button onClick={handleClickOpen}>Sign Up</Button>
            </ButtonGroup>
        </div>
    );
}

export default LoginButtonGroup;