const express = require("express");
const app = express();

var path = require("path");
global.appRoot = path.resolve(__dirname);

const PORT = process.env.PORT || 3000;

// custom routers
const gamesRouter = require("./routes/games");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file
app.use(express.static("public"));
app.use(express.static("src"));
app.set("view engine", "ejs");

// routers
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/games", gamesRouter);

// server listening
app.listen(PORT, '192.168.100.33', () => {
  console.log(`The app start on http://localhost:${PORT}`);
});
