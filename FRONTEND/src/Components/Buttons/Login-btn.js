import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Login from '../LoginPage/Login';

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
}));

const LoginButtonGroup = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root} style={{ textAlign: "right" }}>
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
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group" size="small">

                <Button onClick={handleClickOpen} >Log In</Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Login"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Login />
            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                           Login
            </Button>
                    </DialogActions>
                </Dialog>


                <Button>Sign Up</Button>

            </ButtonGroup>
        </div>
    );
}

export default LoginButtonGroup;