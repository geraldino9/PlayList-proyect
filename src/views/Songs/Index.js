import * as React from 'react';
import FolderList from './../../components/FolderList';
import {apiGET} from '../../api/Api'

export default function Songs( props){
  const {listSongs} = props;
  console.log("El listado de canciones "+ listSongs);
    return(<><FolderList listSongs={listSongs}/></>);
}