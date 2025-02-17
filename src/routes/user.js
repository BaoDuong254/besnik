const express = require("express");
const router = express.Router();

router.get("/buttonClicked", (req, res) => {
	res.json({
		message: "Thank you for your message, we will get back to you soon!",
	});
});

module.exports = router;
