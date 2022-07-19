const { register } = require("../controllers/usersController");

const cors = require('cors');

const router = require("express").Router();
router.post("/register", cors(), register);

module.exports = router;