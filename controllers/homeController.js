const CSV = require("../models/csv");

const multer = require("multer");
const path = require("path");
const Csv = require("../models/csv");
const CSV_PATH = path.join("../assets/data");

let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname + "/" + CSV_PATH));
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

let mux = multer({ storage: storage }).single("file");

async function home(req, res) {
	let allNames = await CSV.find({});
	return res.render("home", {
		title: "Home",
		file: "",
		allNames: allNames,
	});
}

async function upload(req, res) {
	let allNames = await CSV.find({});
	mux(req, res, function (err) {
		if (err) {
			console.log(err);
			return;
		}
		if (req.file) {
			let filename = req.file.originalname.split(".")[0];
			CSV.create({
				csv: filename,
			})
				.then((data) => {
					return res.render("home", {
						title: filename,
						file: filename,
						allNames: allNames,
					});
				})
				.catch((err) => {
					console.log(err);
					return;
				});
		} else {
			return res.render("home", {
				title: req.body.label,
				file: req.body.label.trim(),
				allNames: allNames,
			});
		}
	});
}

module.exports = {
	home,
	upload,
};
