const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
	csv: {
		type: String,
	},
});

const Csv = mongoose.model("Csv", csvSchema);
module.exports = Csv;