import React from 'react'
import {apiGET} from '../../api/Api'
import BasicTable from '../../components/BasicTable';
import Button from "@mui/material/Button";
import FormDialog from '../../components/FormDialog';

import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export const PlayList = ( props ) => {
    const {handleClickOpen,handleClickClose, open} = props;

//use state para le manejo de lista playList
const [listPlayList, setListPlayList] = React.useState(null);
//use state para le manejo de lista canciones
const [listSongs, setListSongs] = React.useState(null);

//use efect esto es para controlar la primera llamada y cargar los datos
React.useEffect(() => {
    getListPlaylist();
    getListSongs();
}, [])

  const getListPlaylist = async () =>{
    let response = await apiGET('http://localhost:8080/playlist/listar').then(reponse => reponse);
    if(response){
      setListPlayList(response);    
    }      
  }

  const getListSongs = async () =>{
    let response = await apiGET('http://localhost:8080/songs/listar').then(reponse => reponse);
    if(response){
      setListSongs(response);    
    }      
  }

  const validateListPlayListData = () =>{
    if(listPlayList){
      return <BasicTable listPlayList = {listPlayList}/>;
    }else{
      return <h3>no hay datos de playLis</h3>;
    }
 }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={8}>
        { validateListPlayListData() }
        </Grid>
        <Grid item xs>
          
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs>
          <Button variant="contained" color="success" onClick={handleClickOpen}>
            Agregar PlayList
          </Button>
        </Grid>
      </Grid>
    </Box>
    <FormDialog open = {open} handleClickClose = {handleClickClose} listSongs={listSongs}/>
        
        
        
    </>
  )
}
