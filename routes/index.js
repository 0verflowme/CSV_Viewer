const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");

router.get("/", homeController.home);
router.post("/upload/csv", homeController.upload);

module.exports = router;
