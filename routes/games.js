const express = require('express')
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const router = express.Router()


const axios = require('axios').default;


// create application/json parser
const jsonParser = bodyParser.json({ type: 'application/json' })


router
    .get("/", jsonParser, async (req, res) => {
        //define api url
        const url = "https://www.freetogame.com/api/games"
        try {
            data = await axios.get(url)
            games = data.data
        }
        // catch errors
        catch (error) {
            console.log(error)
        }
        // console.log(games.length)
        // render games page with data
        res.render("games", { games: games })
    })
    .get("/:id", jsonParser, async (req, res) => {
        //define api url
        const url = "https://www.freetogame.com/api/game?id=" + req.params.id
        try {
            data = await axios.get(url)
            game = data.data
        }

        catch (error) {
            console.log(error)
        }
        // console.log(game)
        res.render("games/show", { game: game })
    })

module.exports = router