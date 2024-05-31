const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: dd00fd21456d4854957a6a86addcefeb,
    clientSecret: c06cdd2e2a6d4514ae7f14c3aeba56a1,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

app.post("/login", (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: dd00fd21456d4854957a6a86addcefeb,
    clientSecret: c06cdd2e2a6d4514ae7f14c3aeba56a1,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
      console.log(err)
    })
})