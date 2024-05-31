import React from 'react'
import { useState,useEffect } from 'react';
import {Container,Form} from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from './useAuth';
export default function Dashboard({code}) {


    const spotifyApi = new SpotifyWebApi({
        ClientId:"dd00fd21456d4854957a6a86addcefeb",

    });
    const [search,setSearch] = useState("");
    const [searchResult,setSearchResult] = useState([]);
    const access_token= useAuth(code);

    useEffect(() =>
    {
    //if(!access_token) return;
        spotifyApi.setAccessToken(access_token);
    },[access_token]);

    useEffect(() =>{
        console.log("Asdadasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        if(!search)return setSearchResult([]);
     //   if(!access_token)return;

        spotifyApi.searchTracks(search)
    .then(response => {
        console.log(response.data);
    });
    },[search,access_token]);

  return (
    <div>
      <Container className='d-flex flex-column py-2' style={{height:"100vh"}}>
      <Form.Control type='search' placeholder="Search your Songs / Artist..."
      value ={search} onChange={e => setSearch(e.target.value)}
      />
        <div className='flex-grow-1 my-2 ' style={{overflowY:"auto"}}>

        </div>
        <div>Bottom</div>
      </Container>
    </div>
  )
}
