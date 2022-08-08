import React from "react";
import { useLocation } from 'react-router-dom';
import Button from "@mui/material/Button";
import { spotifyAuthCall } from "../../Util/Index";

const SpotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_HOST}&response_type=code&scope=user-read-private`;
export default function SpotifyLoguin(props){
    const {setLoginSpotify} = props;
    let location = useLocation();
    const authenticateUser = async (spotifyCode) => {
        if(spotifyCode){
            const result = await  spotifyAuthCall(spotifyCode);
            // console.log("----- "+result);
        }       
      setLoginSpotify(spotifyCode);
    }

    React.useEffect(() => {
        
       const urlParams = new URLSearchParams(location.search);
        // console.log(urlParams);
        const spotifyCode = urlParams.get("code");
        // console.log(spotifyCode);
        authenticateUser(spotifyCode);
        
    }, [location.search])
    

    const handleLoginClick = () => {
        window.location.replace(SpotifyUrl);
      }
    
    return( 
        <>
            <Button variant="contained" onClick={handleLoginClick} color={"success"}>
                logueo Spotify
            </Button>   
        </>
    );
}