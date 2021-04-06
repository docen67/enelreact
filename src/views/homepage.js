import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles,withStyles } from '@material-ui/core/styles';

import logo from '../images/LogoENEL.png';
import botondescargar from '../images/botondescargar.png';
import expoeventos from '../images/expoeventos.jpg';
import logojunta2020 from '../images/logojunta2020.png';
import Greizy from '../images/GreizyBarrera.png'
import IsaacCastillo from '../images/IsaacCastillo.png'
import MargaritaMoscatelli from '../images/MargaritaMoscatelli.png'
import RosilenaLindo from '../images/RosilenaLindo.png'
import maleicon from '../images/male.png'
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    padding: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  _logo: {
    height: '5em',
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:"1%",
    with: '5%'
  },
  paper: {
    padding: '5px',
    height:'100%',
    width:"100%",
    marginLeft: "5px",
    marginRight: "5px",
  },
  headertypography:{
    alignItems: 'center'
  },
  papervideo: {
    marginTop: '12px',
    height: '100%'
  },
  button: {
    marginTop: '12px',
    marginLeft: '12px',
    width: '30%',
    height: '50px',
    backgroundColor: '#3CA360'
  },
  action: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
    margin: theme.spacing(1),
    alignItems: 'center'
  },
  table: {
    minWidth: 700,
  },
  card: {
    maxWidth: '250px',
    maxHeight: '320px',
    margin: theme.spacing(1),
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(hora, actividad) {
  return { hora,actividad };
}

const rows = [
  createData('10:00a.m. ', 'Video de introducción sobre ENEL'),
  createData('10:05a.m.', 'Bienvenida por el Moderador de Ene! Green Power (nombre,apellido,cargo)'),
  createData('10:10a.m', 'Energías Renovables y su papel en el cambio climático Rosi/ena Undo - Subsecretaría Nacionalde Energía de Panamá'),
  createData('10:30a.m.', 'Energías renovables y su aporte al cumplimiento de los ODSen Centro América Margherita Moscatelli- Gerente de Sustentabilidad de Centro América, Ene! México'),
  createData('10:50a.m. ', 'Los certificados de Energías Renovables como ejemplo de mejores prácticas de sustenta bilidadIsaac Castillo- EM & CO'),
  createData('11:00a.m. ', 'Qué significa ser un Green Enabler GreízyBarrera - Jefa de Front Office Centroamérica'),
  createData('01:30a.m ', 'Acto de reconocimiento a clientes de Panamá y Guatemala'),
  createData('11:40a.m ', 'Sondeo'),
  createData('11:45a.m ', 'Sesión de preguntas y respuestas al público'),
  createData('12:00a.m ', 'Cierre por el Moderador de Ene! Green Power(nombre,apellido, cargo9'),
];

export default function Home(props) {
  const classes = useStyles();
  const userData = props.location.state
  console.log(userData )
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 6, radius: 10});
  const avatarStyles = useDynamicAvatarStyles({ radius: 20, size: 48 });
  function Header(){
    return(
      <React.Fragment>
        <img src={logo} alt="Logo" className={classes._logo}/>;
        <Typography component="div">
            <Box fontFamily="'Poppins', sans-serif" fontWeight='bold' fontSize="h5.fontSize" lineHeight="1" mb={1} display="flex" justifyContent="center" color="#3CA360">
            Energías Renovables:
            </Box>
            <Box fontFamily="fontFamily" fontSize="h6.fontSize" lineHeight="1" mt={1} display="flex" justifyContent="center" color="#3CA360">
            Sostenibilidad y Medio Ambiente
            </Box>
          </Typography>
      </React.Fragment>
    );
  }

  function LiveVideo(){
    return(
      <React.Fragment>
        <div  bgcolor={'##3CA360'} className={classes.papervideo} style={{ height:"100%"}}>
          <Grid container spacing={2} mt={5} style={{ height:"100%"}}>

            <Grid item xs={8} style={{ height:"100%"}}>
              <Paper item className={classes.paper} elevation={5} style={{ height:"100%"}}>
              <div style={{ height:"100%"}}>
              <ReactPlayer
                  url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                  playing="true"
                  onReady="true"
                  width="100%"
                  height="500px"
                />
              </div>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper item className={classes.paper} elevation={5}>
              <Box display="flex" flexDirection="row-reverse" fontFamily="'Poppins', sans-serif" fontWeight='bold' fontSize="h5.fontSize" lineHeight="0.7" mt={1} mb={1}>
                Chat
              </Box>
              <Box display="flex" flexDirection="row-reverse" fontFamily="'Poppins', sans-serif" fontSize="h6.fontSize" lineHeight="0.7" mt={1} mb={1}>
                Conozca e Interactúe
              </Box>
                <iframe title="My chat" src="https://vimeo.com/live-chat/532942304/" width="100%" height="88%" frameborder="0"></iframe>
              </Paper>
              
            </Grid>
            
          </Grid>
        </div>
      </React.Fragment>
    );
  }

  function CommentsSection(){
   
    return(
      <React.Fragment>
        <Row mt={0.6} />
            <IconButton  style={{ backgroundColor: '#33CC99', height:'70px',float:'right',right:'0px'}} className={classes.action} classes={iconBtnStyles}>
              <Info position={'middle'} useStyles={useTutorInfoStyles}>
                <InfoTitle style={{ color: '#FFFFFF', padding:'7px'}}>{userData.UNAME}</InfoTitle>
              </Info>
              <Item >
                <Avatar
                  classes={avatarStyles}
                  src={
                    maleicon
                  }
                />
              </Item>
            </IconButton>
            <Row mb={10} p={1.5} gap={2}/>
      </React.Fragment>
      );
  }
  function Descargas(){
    
    return(
      <React.Fragment>
        <Row mt={6} />
            <IconButton  style={{ height:'55px', marginLeft:'33px'}}>
              <img src={botondescargar} alt="Boton Descargar"/>;
            </IconButton>
            <Row mb={10} p={1.5} gap={2}/>
      </React.Fragment>
      );
  }

  function Footer(){
    
    return(
      <React.Fragment>
        <Row mt={1} />
            
            <Box style={{ fontSize:'80%'}} display="flex" flexDirection="row-reverse" fontFamily="'Poppins', sans-serif">
              <p>

                Conozca e Interactúe
                <IconButton display="flex" flexDirection="row-reverse" style={{ height:'55px', marginLeft:'5px'}}>
                  <img src={expoeventos} alt="Boton Descargar" style={{ height:'40px', display:'inline-block'}}/>;
                </IconButton>
                <IconButton display="flex" flexDirection="row-reverse" style={{ height:'55px', marginLeft:'5px'}}>
                  <img src={logojunta2020} alt="Boton Descargar" style={{ height:'40px', display:'inline-block'}}/>;
                </IconButton>
                
                </p>
            </Box>

            
            
            <Row mb={0.5} />
      </React.Fragment>
      );
  }

  function CustomizedTables() {
    const classes = useStyles();
  
    return (

      <div  bgcolor={'##3CA360'} className={classes.papervideo} style={{ height:"100%"}}>
          <Grid container spacing={2} mt={5} style={{ height:"100%"}}>

            <Grid item xs={6} style={{ height:"100%"}}>
            <div display="flex" justifyContent="center"  bgcolor={'##3CA360'}>
        <Box fontFamily="'Poppins', sans-serif" fontSize="h3.fontSize" lineHeight="1" mb={1} display="flex" justifyContent="center" pr={1}>
           Oradores
        </Box>
      
      <Row p={1.5} gap={2} borderRadius={16} container spacing={2} display="flex" justifyContent="center">
        
        <Card className={classes.card} item >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Margherita Moscatelli"
              height="200"
              image={MargaritaMoscatelli}
              title="Margherita Moscatelli"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" fontWeight='bold' component="h6">
              Margherita Moscatelli 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Gerente de Sustentabilidad de Centro América Enel México

              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

      <Card className={classes.card} item >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Isaac Castillo"
            height="200"
            image={IsaacCastillo}
            title="Isaac Castillo"
          />
          <CardContent>
          <Typography gutterBottom variant="h6" fontWeight='bold' component="h6">
            Isaac Castillo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              EM&CO Enel Green PowerPanamá

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Row>

      <Row  p={1.5} gap={2} borderRadius={16} container spacing={2} display="flex" justifyContent="center">
      <Card className={classes.card} item >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Rosilena Lindo"
            height="200"
            image={RosilenaLindo}
            title="Rosilena Lindo"
          />
          <CardContent>
          <Typography gutterBottom variant="h6" fontWeight='bold' component="h6">
            Rosilena Lindo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Subsecretaria Nacional de Energía de Panamá
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card} item spacing={3}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Greizy Barrera"
            height="200"
            image={Greizy}
            title="Greizy Barrera"
          />
          <CardContent>
          <Typography gutterBottom variant="h6" fontWeight='bold' component="h6">
            Greizy Barrera
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Jefa de Front Office de Enel Centroamérica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Row>
      </div>
            </Grid>
            <Grid item xs={6}>
            <div>
                  <Box fontFamily="'Poppins', sans-serif" fontSize="h3.fontSize" lineHeight="1" mb={1} display="flex" justifyContent="center" pr={1}>
                      Agenda
                  </Box>
                  <Box fontFamily="fontFamily" fontSize="h6.fontSize" fontWeight="bold" lineHeight="1" mb={1} display="flex" justifyContent="start" pr={1} ml={2}>
                  Horario:
                  </Box>
                  <Box fontFamily="fontFamily" fontSize="h6.fontSize" lineHeight="1" mb={1} display="flex" justifyContent="start" pr={1} ml={2}>
                  Guatemala y Costa Rica: 09:00 a.m. – 11:00 a.m.
                  </Box>
                  <Box fontFamily="fontFamily" fontSize="h6.fontSize" lineHeight="1" mb={1} display="flex" justifyContent="start" pr={1} ml={2}>
                  Panamá: 10:00 a.m a 12:00 p.m
                  </Box>
                  <Box fontFamily="fontFamily" fontSize="h6.fontSize" lineHeight="1" mb={1} display="flex" justifyContent="start" pr={1} ml={2}>
                  </Box>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Hora</StyledTableCell>
                          <StyledTableCell align="center">Actividad</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.hora}>
                            <StyledTableCell component="th" scope="row">
                              {row.hora}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.actividad}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </div>
            </Grid>
            
          </Grid>
        </div>
    );
  }

  

  return (

      <Container >
        <CssBaseline />
        <Header />
        <LiveVideo/>
        <CommentsSection/>
        <CustomizedTables/>
        <Descargas/>
        <Footer/>
      </Container>
    
    );
}
