const express = require("express");
router = express.Router();
dataRoute = require("../controllers/data");

router.get("/", dataRoute.data);

module.exports = router;
