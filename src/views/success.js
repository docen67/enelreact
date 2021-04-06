import React from 'react';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../images/LogoENEL.png';
import success from '../images/tick.png'

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "#47AF01"
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
    backgroundColor: "#47AF01",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 'bold',
    wordSpacing: '5px'
  },
  _logo: {
    height: '8em',
    with: '5%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px'
  },

  input:{
    width: "100%",
    height: "5em",
    padding: "8px 15px",
    margin: "4px",
    borderRadius: '10px',
    borderColor: '#D3D3D3'
  },
  copybox:{
    position:'absolute',
    bottom:'0',
    margin: "1em auto"
  },
  defaultProps : {
    bgcolor: 'background.paper',
  m: 1,
  style: { width: '5rem', height: '5rem' },
  borderColor: 'text.primary',
  }
  
}));

export default function SignInSide(props) {
  const classes = useStyles();
  // eslint-disable-next-line


  return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >

                <Container maxWidth="sm" item xs={6}>
                <img src={logo} alt="Logo" className={classes._logo} display="flex" justifyContent="center" />

                    <Typography component="div" display="flex" justifyContent="center">
                        <Box fontFamily="'Poppins', sans-serif" fontSize="h5.fontSize" lineHeight="0.7" mb={5} mt={4} display="flex" justifyContent="center">
                            ¡Su registro se ha efectuado con éxito!
                        </Box>
                        <Box fontFamily="'Poppins', sans-serif" fontSize="h5.fontSize" lineHeight="0.7" mb={5} mt={4} display="flex" justifyContent="center">
                            <img src={success} alt="Logo" display="flex" justifyContent="center" />
                        </Box>
                    </Typography>

                    <Box border={1} className={classes.defaultProps} display="flex" justifyContent="center">
                    <Typography component="div" display="flex" justifyContent="center" align="center">
                        <Box fontFamily="fontFamily" fontSize="h5.fontSize" lineHeight="1" mt={2} display="flex" justifyContent="center">
                            Le hemos enviado a su correo electrónico la confirmación de su registro.
                        </Box>
                        <Box fontFamily="fontFamily" fontSize="h6.fontSize" fontWeight="bold" lineHeight="0.7" mt={2} display="flex" justifyContent="center">
                            Lo esperamos el miércoles 21 de abril.
                        </Box>
                        <Box fontFamily="fontFamily" fontSize="h6.fontSize" lineHeight="0.7" mt={2} display="flex" justifyContent="center">
                            Guatemala y Costa Rica: 09:00 a.m. – 11:00 a.m.
                        </Box>
                        <Box fontFamily="fontFamily" fontSize="h6.fontSize" lineHeight="0.7" mt={2} mb={2} display="flex" justifyContent="center">
                            Panamá: 10:00 a.m. – 12:00 p.m.
                        </Box>
                    </Typography>
                    </Box>
                </Container>   
        </Grid> 
  );
}