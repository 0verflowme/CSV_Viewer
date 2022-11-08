const express = require("express");
const ejs = require("ejs");
const ejslayout = require("express-ejs-layouts");
const db = require('./config/mongoose');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(ejslayout);
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./assets"));
app.use("/data", express.static("./assets/data"));

const routes = require("./routes");
app.use("/", routes);

app.listen(PORT, () => {
	console.log("Server is up and Running on PORT", PORT);
});
