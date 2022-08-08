import { isEmpty, isObject, isString } from "lodash";
import {defaultHeaders} from '../config/config';


let myConfig = defaultHeaders();
//metodo para peticiones de tipo GET
export const apiGET = (url) => {
    if (isEmpty(url)) {
      console.error("No se ha recibido la ruta del servicio.");
      return Promise.resolve(undefined);
    }  
    let requestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };  
    return fetch(url, requestInit)
      .then(response => handleResponse(response))
      .catch(error => handleError(error));
  };





  export const apiGETParam = (url, params, pkp) => {
    if (isEmpty(url)) {
      console.error("No se ha recibido la ruta del servicio.");
      return Promise.resolve(undefined);
    }
  
    if (isEmpty(params)) {
      console.error("No se ha recibido el objeto de parámetros.");
      return Promise.resolve(undefined);
    }
  
    let objUrl = new URL(url);
    let requestInit = {
      method: "GET",
      headers: myConfig.headers
    };
    let urlParams = new URLSearchParams(params);
    objUrl.search = urlParams.toString();
  
    return fetch(objUrl, requestInit)
      .then(response => handleResponse(response))
      .catch(error => handleError(error));
  };


  //
  export const apiPOST = (url, objeto, pkp, formData) => {
    if (isEmpty(url)) {
      console.error("No se ha recibido la ruta del servicio.");
      return Promise.resolve(undefined);
    }
  
    if (isEmpty(objeto) && undefined === formData) {
      console.error("No se ha recibido el objeto de parámetros.");
      return Promise.resolve(undefined);
    }
  
    let requestInit = {
      method: "POST",
      body: objeto ? JSON.stringify(objeto) : formData,
      headers: myConfig.headers
    };
  
    return fetch(url, requestInit)
      .then(response => response)
      .catch(error => handleError(error));
  };


//metodo para peticiones de tipo DELETE
  export const apiDELETE = (url, id, objeto) => {
    if (isEmpty(url)) {
      console.error("No se ha recibido la ruta del servicio.");
      return Promise.resolve(undefined);
    }
  
    if (undefined === id) {
      console.error("No se ha recibido el id.");
      return Promise.resolve(undefined);
    }
  
    if (isEmpty(objeto)) {
      console.error("No se ha recibido el objeto de parámetros.");
      //return Promise.resolve(undefined);
    }
  
    let requestInit = {
      method: "DELETE",
      body: JSON.stringify(objeto),
      headers: myConfig.headers
    };
  
    return fetch(`${url}/${id}`, requestInit)
      .then(response => response)
      .catch(error => handleError(error));
  };



  const handleError = error => {
    let msgError ="Se ha presentado un inconveniente, por favor intenta más tarde.";  
    if (isString(error)) {
      msgError = error;
    } else if (isObject(error)) {
      if (error.mensaje) {
        msgError = error.mensaje;
      } else if (error.request) {
        msgError = "No hay conexión a internet.";
      } else {
        msgError = "No se pudo establecer la conexión.";
      }
    }
  
    return Promise.reject(msgError);
  };


  const handleResponse = (response) => {
    return response.text().then(text => {
        if (response.ok) {
            console.log("ok");
            if (!isEmpty(text)) {
               // console.log("ok text "+text);
                return JSON.parse(text);
              }
        }
    });
  }



  export default function apiCall({
    url,
    params,
    method,
    body,
    headers,
  }) {
    console.log('url'+url);
    console.log('params'+params);
    console.log('method'+method);
    console.log('body'+body);
    console.log('headers'+headers);
    try{
    return fetch(url, {
      params,
      method,
      body,
      headers,
    })
  }catch(error){
    console.error(error);
  }
  }