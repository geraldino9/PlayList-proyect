import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
const SpotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_HOST}&response_type=code&scope=user-read-private`;

export function ButomLoginSpotify(){
    let location = useLocation();
    console.log("location "+ location);
    const handleLoginClick = () => {
        window.location.replace(SpotifyUrl);
      }

return (
    <Button variant="outlined" onClick={handleLoginClick}>
        logueo Spotify
      </Button>
);
    
      
}