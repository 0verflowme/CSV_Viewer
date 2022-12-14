const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/csvViewer");
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on("err", () => { console.error.bind(console, "Connection Error") });
db.once("open", () => {
   console.log('Connected to DB');
});