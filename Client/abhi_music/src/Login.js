import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const CLIENT_ID = "dd00fd21456d4854957a6a86addcefeb";
const REDIRECT_URI = "http://localhost:3000";
const SCOPES = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state"
];
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}`;

export default function Login() {
  
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
}
