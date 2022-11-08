function home(req, res) {
	return res.render("home", {
		title: "Home",
	});
}

function upload(req, res) {
   console.log(req.body);
   return res.redirect('back');
}

module.exports = {
	home,
	upload,
};
