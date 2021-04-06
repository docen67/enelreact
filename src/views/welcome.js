import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import Image from '../images/Afiche.png';
import logo from '../images/LogoENEL.png';



//import Login from "./login.js";
//import Homepage from "./homepage.js";

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
  registerButton: {
    width: "50%",
    marginTop: "15px",
    marginRight: "0px",
    marginLeft: "0px",
    height: "5em",
    borderRadius:  "50px",
    backgroundColor: "#33CC99",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 'bold',
    wordSpacing: '5px'
  },
  loginButton: {
    width: "50%",
    marginTop: "15px",
    marginRight: "0px",
    marginLeft: "0px",
    height: "5em",
    borderRadius:  "50px",
    backgroundColor: "#47AF01",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 'bold',
    wordSpacing: '5px'
  },
  _logo: {
    height: '10em',
    with: '5%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  copybox:{
    position:'absolute',
    bottom:'0',
    margin: "1em auto"
  }
  
}));

export default function App({ navigation }) {
  const classes = useStyles();
  const history = useHistory();
  // eslint-disable-next-line
  const {register, errors, handleSubmit} = useForm();
  
  function loginClick(){
    history.push('/login')
  }

  function registerClick(){
    history.push('/register')
  }

  return (
      
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={0} md={7} className={classes.image} />
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={2} square height="100%">
        <div className={classes.paper} height="100%" alignItems='flex-start' container  justify="flex-start">

          <img src={logo} alt="Logo" className={classes._logo}/>;

          <Typography component="div">
            <Box fontFamily="'Poppins', sans-serif" fontWeight='bold' fontSize="h3.fontSize" lineHeight="0.7" mb={4} mt={4}>
              Bienvenidos
            </Box>
            <Box fontFamily="'Poppins', sans-serif" fontSize="h4.fontSize" lineHeight="0.7" mt={6}>
                ¿Qué desea hacer?
            </Box>
            <Box fontFamily="'Poppins', sans-serif" fontSize="h5.fontSize" lineHeight="0.7" mt={4}>
              Registrarse para tener acceso al evento
            </Box>
          </Typography>
          
          <Button  onClick={registerClick} variant="contained" className={classes.registerButton} style={{ color: '#FFFFFF'}} >
                Registro
           </Button>

           <Typography component="div" mt={6}>
           <Box  display="flex"  fontFamily="'Poppins', sans-serif" fontSize="h5.fontSize" lineHeight="0.7" mt={6}>
              ¿O acceder a la sala?
            </Box>
          </Typography>
          
          <Button type="submit" onClick={loginClick} variant="contained" className={classes.loginButton} mb={10} ml={0} style={{ color: '#FFFFFF'}}>
                IR AL EVENTO
           </Button>

           <Typography component="div" alignItems='flex-start' container  justify="flex-start">
              <Box alignItems='flex-start' container  justify="flex-start" fontFamily="'Poppins', sans-serif" fontSize="h6.fontSize" lineHeight="0" mb={1} mt={9} fontWeight="bold">
                  Miércoles 21 de abril de 2021
              </Box>
              <Box style={{ fontSize:'100%'}} fontFamily="'Poppins', sans-serif" fontSize="h6.fontSize" lineHeight="0" mt={3}>
                  Panamá: 10:00 a.m. – 12:00 p.m.
              </Box>
              <Box style={{ fontSize:'100%'}} fontFamily="'Poppins', sans-serif" fontSize="h6.fontSize" lineHeight="0" mt={3}>
                  Guatemala y Costa Rica: 09:00 a.m. – 11:00 a.m.
              </Box>
          </Typography>

          <Box mt={5} className={classes.copybox}>
              <Copyright />
            </Box>

              
        </div>
             
      </Grid>
    </Grid>
    );
}
