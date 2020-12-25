import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
      <TextField id="standard-basic" label="Username" />
      <TextField id="standard-basic" label="Password" />

   

     
    </form>
  );
}

    export default Login ; 




































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
