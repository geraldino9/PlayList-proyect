import * as React from 'react';
import Grid from "@mui/material/Grid";

import { PlayList } from '../PlayList/Index';
import SpotifyLoguin from '../SpotifyLoguin';
import SignIn from '../../components/SignIn';




// const SpotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_HOST}&response_type=code&scope=user-read-private`;

export  default function HomePage (props)   {
  
  const loggedSpotify = null; 
  //estado para manejar si el modal de crear playlist se abre o se cierra
  const [open, setOpen] = React.useState(false);
  const [loggin,setLogin] = React.useState(false);
  const [loginSpotify,setLoginSpotify] = React.useState(false);

  React.useEffect(() => {
  
  }, [loginSpotify,loggin])
  
  
  // console.log(open);

    const handleClickOpen = () => {
      console.log("abre el modal");
      setOpen(true);
     }

   const handleClickClose = () => {
    setOpen(false);
   }

   const validateIsLogged = () => {
 
    
    console.log("Validando el estado del logueo");
        if(loggin  && loginSpotify){
          return <PlayList loginSpotify = {loginSpotify }
           handleClickOpen={handleClickOpen}
           handleClickClose = {handleClickClose}
           open={open}/>
        } else if(loggin  && !loginSpotify) {
          return <SpotifyLoguin setLoginSpotify = {setLoginSpotify}/>
        } else{
          console.log('enviando a loguearse en la pagina');
          return <SignIn setLogin ={setLogin}/>
        }
   }
 


  return (
    <>
      <Grid container>
        Home Page
        <Grid item xs={12} md={12}>
          {validateIsLogged()}
        </Grid>
      </Grid>
    </>
  );
};
