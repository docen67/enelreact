import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";
import { useHistory } from 'react-router-dom';

import Image from '../images/Afiche.png';
import logo from '../images/LogoENEL.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" alignSelf="flex-end">
      {'Copyright © '}
        Powered by JUNTA.EVENTS y Expo Eventos de Panamá 
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    width: "95%",
    margin: "8px",
    height: "5em",
    borderRadius:  "50px",
    backgroundColor: "#47AF01"
  },
  _logo: {
    height: '10em',
    with: '5%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  input:{
    width: "100%",
    height: "5em",
    padding: "8px 15px",
    margin: "1px 0",
    boxsizing: "border-box",
    borderRadius: '10px'
  },
  copybox:{
    position:'absolute',
    bottom:'0',
    margin: "1em auto"
  }
  
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const history = useHistory();
  // eslint-disable-next-line
  const {register, errors, handleSubmit} = useForm();

  const onSubmit = async (_email) => {
    
    //var url = "http://localhost:3001/getUser"
    var url = "https://mailchimpenel.herokuapp.com/"
    var UEmail = _email.UEmail
    Axios.get(url, {
        params: {
          UEmail
        }
      })
      .then(function (response) {
        if (response.data.email_address===UEmail) {
         // history.push(`/home:${response.data}`)
         props.history.push({  pathname: '/home', state: response.data});
          
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });  
    
}
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={0} md={7} className={classes.image} />
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={2} square height="100%">
        <div className={classes.paper} height="100%">

          <img src={logo} alt="Logo" className={classes._logo}/>;

          <Typography >
            <Box fontFamily="'Poppins', sans-serif" fontWeight='bold' fontSize="h5.fontSize" lineHeight="0.7" mb={2} mt={4}>
              Bienvenido nuevamente
            </Box>
            <Box fontFamily="'Poppins', sans-serif"  fontSize="h6.fontSize" lineHeight="0.7" mt={1}>
              Por favor ingrese su correo
            </Box>
          </Typography>
          <form className={classes.form} Validate onSubmit={handleSubmit(onSubmit)}>
            <input
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="UEmail"
              placeholder="Corrreo Electrónico"
              name="UEmail"
              autoComplete="email"
              autoFocus
              ref={register({
                required: {
                    value: true, 
                    message: 'Correo es requerido'
                    }, 
                maxLength: {
                    value: 50, 
                    message: 'No más de 50 carácteres!'
                    },
                minLength: {
                    value: 10, 
                    message: 'Mínimo 10 carácteres'
                    }
            })}
            />
            
              <Button type="submit" fullWidth variant="contained" className={classes.submit} style={{ color: '#FFFFFF'}}>
                Ingresar
              </Button>
            
          </form>
          <Box mt={5} className={classes.copybox}>
              <Copyright />
            </Box>
        </div>
      </Grid>
      
    </Grid>
  );
}