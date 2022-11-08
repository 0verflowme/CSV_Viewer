const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://0verflowme:eZauRaLZMBfi8isp@cluster0.ghy5nv0.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose.connection;

db.on("err", () => { console.error.bind(console, "Connection Error") });
db.once("open", () => {
   console.log('Connected to DB');
});