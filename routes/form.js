var express = require("express");
var router = express.Router();
const formController = require("../controllers/formController");

/* GET users listing. */
router.get("/", formController.index);
router.post("/form", formController.insert);

module.exports = router;
