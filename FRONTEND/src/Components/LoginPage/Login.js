import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle'
import { FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
        <Input
        required="required"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel >Password</InputLabel>
        <Input
        required="required"
          id="input-with-icon-adornment"
         
        />
      </FormControl>




    </form>
  );
}

export default Login;




































// import { Grid } from '@material-ui/core';
// import React from 'react';

// const Login = () => {

//     return (

//         <div>
//             <Grid container spacing = {12} >
//                 <Grid item xs = {12}>
//                     <Grid item xs = {4} />

//                         <Grid item xs = {4}>

//                         </Grid>

//                     <Grid item xs = {4} />
//                 </Grid>
//             </Grid>


//         </div>

//     )

// }


// export default Login;
