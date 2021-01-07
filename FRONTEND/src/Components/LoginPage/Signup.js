import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signup } from '../auth/Helper';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        UNBLOK Store
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    error: "",
    success: false,
  })



  const { name, email, lastname, password, error, success } = values

  const handleChange = name => e => {

    setValues({ ...values, error: false, [name]: e.target.value })
  }

  const onSumbit = e => {
    e.preventDefault()
    setValues({ ...values, error: false })
    signup({ name, lastname, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false })
        }
        else {
          setValues({
            ...values,
            name: "",
            lastname: "",
            email: "",
            password: "",
            error: "",
            success: true
          })
        }
      })
      .catch(console.log("Error in signup"))
  }
  const SuccessMessage = () => {
    return (
      <div className="alert alert-success"
        style={{ display: success ? "" : "none" }} >
        Account created Successfully .
        Please Sign in to continue.

      </div>
    )

  }
  const ErrorMessage = () => {
    return (<div className="alert alert-success"
      style={{ display: error ? "" : "none" }} >
      {error}
    </div>)

  }


  return (
    <>
      {SuccessMessage()}
      {ErrorMessage()}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange("name")}
                  type="text"
                  value={name}

                  variant="outlined"

                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange("lastname")}
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={lastname}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange("email")}
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange("password")}
                  variant="outlined"
                  required
                  fullWidth

                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password" label="Re-enter Password"
                  type="password"

                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              onClick={onSumbit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>

              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
export default withRouter(SignUp);