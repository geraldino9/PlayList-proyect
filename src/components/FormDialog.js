import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Songs from './../views/Songs/Index';

export default function FormDialog( props ) {
    const {open, handleClickClose, listSongs} = props;


  return (
    <>
    <div>
      
      <Dialog  open={open} onClose={handleClickClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <form>
        <DialogContent>
          <DialogContentText>
            Espacio para crear tus play list con tus canciones favoritas!!!.
          </DialogContentText>
          
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nombre"
                type="email"
                fullWidth
                variant="standard"
            />
            <TextField
                autoFocus
                margin="dense"
                id="descripcion"
                label="Descripcion"
                type="email"
                fullWidth
                variant="standard"
            />
              {/* aqui se estan listando las canciones */}
         <Songs listSongs={listSongs}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={handleClickClose}>Subscribe</Button>
        </DialogActions>
        </form>
       

          
      </Dialog>
    </div>
   
    </>
  );
}
