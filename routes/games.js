const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const axios = require('axios').default;


// create application/json parser
var jsonParser = bodyParser.json()

router
    .get("/", jsonParser, (req, res) => {



        res.render('games/index')

    })
    .get("/", (req, res) => {
        const url = 'https://www.freetogame.com/api/games?id=452'
        axios.get(url)
            .then(function (response) {

                games = JSON.stringify(response.data)
                console.log(games)
            })
            .catch(function (error) {
                console.log(error)
            })


        // console.log(JSON.stringify(response))

        res.send(games)

    })


module.exports = router