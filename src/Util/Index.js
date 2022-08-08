import apiCall from "../api/Api";


const commonParams = {
    redirect_uri: process.env.REACT_APP_SPOTIFY_CALLBACK_HOST,
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
};


export const spotifyAuthCall = async (code) => {
    try{
        const params ={
            code,
            grant_type: "authorization_code",
            ...commonParams
        };
        const searchParams = Object.keys(params).map((key) => encodeURIComponent(key) + "="+ encodeURIComponent(params[key]) ).join("&");
      
    
        const spotifiCall = await apiCall({
          method:"POST",
          url:"https://accounts.spotify.com/api/token" ,
          body:searchParams,
          headers:{"content-type":"application/x-www-form-urlencoded"} 
        });
       
        return await spotifiCall.json();
    }catch(error){
        console.error(error);
    }
   

}




export const systemAuthCall = async  (props) =>{
    const {username,password}= props;
    try{
        //parametros del body
        const params ={"username":username,"password":password, "grant_type":"password"};
        //convierte los aprametros del body en parametros interpretados como una uri
        const searchParams = Object.keys(params).map((key) => encodeURIComponent(key) + "="+ encodeURIComponent(params[key]) ).join("&");       
        //El Authorization es basico con los datos del usaurio (reactapp) y contrasena (12345)
            let loginCall = await apiCall({
                method:"POST",
                url:"http://localhost:8090/api/security/oauth/token" ,
                body:searchParams,
                headers:{"content-type":"application/x-www-form-urlencoded","Authorization":"Basic cmVhY3RhcHA6MTIzNDU="} 
              });              
              return await loginCall.json();              
    }catch(error){
        console.error(error);
    }
}