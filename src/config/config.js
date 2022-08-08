export const HOST = "localhost";
export const PORT = "8080";
export const API_PLAYLIST = `http://${HOST}:${PORT}/`;
export const SPOTIFY_CLIENT_ID = "ffdcd1250630484da7e4167dbd25c1d0";
export const SPOTIFY_SECRET_CLIENT_ID = "09586a5ea29f4fa891ed44c69bd015ef";


export function defaultHeaders() {
    return {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        // Authorization: `${localStorage.getItem("jwtToken")}`,
      },
    };
  }