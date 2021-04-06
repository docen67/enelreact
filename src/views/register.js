import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";
import { useHistory } from 'react-router-dom';

import logo from '../images/LogoENEL.png';


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
  containerprpos: {
    m: 1,
  }
  
}));

export default function SignInSide(props) {
  const classes = useStyles();
  // eslint-disable-next-line
  const {register, errors, handleSubmit} = useForm();

const onSubmit = async (formdata) => {
  props.history.push({  pathname: '/success'});
  
    //var url = "http://localhost:3001/addcontact"
    var url = "https://mailchimpenel.herokuapp.com/"
    var myEmail = formdata.target.elements.UEmail.value
    var uProfession = formdata.target.elements.UPROFESSIO.value
    var phone = formdata.target.elements.PNUMBER.value
    var country = formdata.target.elements.UCOUNTRY.value
    var company = formdata.target.elements.UNAME.value
    var name = formdata.target.elements.UCOMPANY.value
    var gender = formdata.target.elements.UGENDER.value
    Axios.get(url, {
      params: {
        UEmail: myEmail,
        UNAME: name,
        UPROFESSIO: uProfession,
        PNUMBER: phone,
        UCOUNTRY: country,
        UCOMPANY: company,
        UGENDER: gender
      }
    })
    .then(function (response) {
      //if (response.data.email_address===myEmail) {
       
       props.history.push({  pathname: '/success'});
       
      //}
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
      
        <Container  display="flex" justifyContent="center"  maxWidth="sm"  className={classes.containerprpos} >

          <img src={logo} alt="Logo" className={classes._logo} display="flex" justifyContent="center" />

          <Typography component="div" display="flex" justifyContent="center">
            <Box fontFamily="'Poppins', sans-serif" fontWeight='bold' fontSize="h4.fontSize" lineHeight="0.7" mb={5} mt={4} display="flex" justifyContent="center">
            Formulario de registro
            </Box>
          </Typography>

          <form className={classes.form} Validate onSubmit={onSubmit} display="flex" justifyContent="center">
            
            <input
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              placeholder="Nombres y Apellidos"
              id="UNAME"
              name="UNAME"
              autoFocus
              ref={register({
                required: {
                    value: true, 
                    message: 'Nombre es requerido'
                    }, 
                maxLength: {
                    value: 50, 
                    message: 'No más de 50 carácteres!'
                    }
            })}
            />

            <input
              style={{ marginTop:'0.5m'}}
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              id="UPROFESSIO"
              placeholder="Profesión"
              name="UPROFESSIO"
              ref={register({
                required: {
                    value: true, 
                    message: 'Profesión es requerido'
                    }, 
                maxLength: {
                    value: 20, 
                    message: 'No más de 50 carácteres!'
                    }
            })}
            />

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

            <input
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              type="number"
              id="PNUMBER"
              placeholder=" Teléfono"
              name="PNUMBER"
              ref={register({
                required: {
                    value: true, 
                    message: 'Número es requerido'
                    }, 
                maxLength: {
                    value: 20, 
                    message: 'No más de 20 carácteres!'
                    },
                minLength: {
                    value: 5, 
                    message: 'Mínimo 5 carácteres'
                    }
            })}
            />

            <input
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              id="UCOUNTRY"
              placeholder="País"
              name="UCOUNTRY"
              ref={register({
                required: {
                    value: true, 
                    message: 'País es requerido'
                    }, 
                maxLength: {
                    value: 30, 
                    message: 'No más de 30 carácteres!'
                    },
                minLength: {
                    value: 3, 
                    message: 'Mínimo 3 carácteres'
                    }
            })}
            />

            <input
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="UCOMPANY"
              placeholder="Companía"
              name="UCOMPANY"
              autoComplete="email"
              ref={register({
                required: {
                    value: true, 
                    message: 'Companía es requerida'
                    }, 
                maxLength: {
                    value: 50, 
                    message: 'No más de 50 carácteres!'
                    },
                minLength: {
                    value: 3, 
                    message: 'Mínimo 3 carácteres'
                    }
            })}
            />

            <select 
              style={{ 
                width: "100%",
                height: "6em",
                padding: "8px 15px",
                margin: "4px",
                borderRadius: '10px',
                borderColor: '#D3D3D3'
              }}
              required
              fullWidth
              name='UGENDER' 
              id='UGENDER' 
              ref={register({
                required: {
                    value: true, 
                    message: 'Género es requerida'
                    }
              })}>
              <option value="">Sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>

            <Button type="submit" fullWidth variant="contained" className={classes.submit} style={{ color: '#FFFFFF'}}>
                Ingresar
              </Button>
            
          </form>
        </Container >
      
  );
}