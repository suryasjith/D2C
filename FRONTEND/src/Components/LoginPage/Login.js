import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect, withRouter } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from '../auth/Helper'


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  })

  const { email, password, error, loading, didRedirect } = values

  const { user } = isAuthenticated()

  const handleChange = name => e => {

    setValues({ ...values, error: false, [name]: e.target.value })
  }



  const onSubmit = e => {
    e.preventDefault()
    setValues({ ...values, error: false, loading: true })
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false })
        }
        else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            })
          })
        }
        
      })
      .catch(console.log("Sign in request failed"))
  }

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return (
        <Redirect to = '/admin/dashboard' />
        )
      }
      else {
        return (
          <p>
          <Redirect to ='/'></Redirect>
          </p>
        )
      }
    }
    if (isAuthenticated) {
      return <Redirect to="/" />
    }
  }

  const LoadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info"
        >
          LOADING ....

        </div>
      )

    )

  }
  const ErrorMessage = () => {
    return (<div className="alert alert-danger"
      style={{ display: error ? "" : "none" }} >
      {error}
    </div>)

  }



  return (
    <>
      {LoadingMessage()}
      {ErrorMessage()}
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              onChange={handleChange("email")}
              value={email}
              variant="outlined"
              margin="normal"
              type="email"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handleChange("password")}
              value={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={onSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>

            </Grid>
          </form>
        </div>

      </Container>
     
      {performRedirect()}
    </>
  );
}

export default withRouter(Login)