const router = require("express").Router();
const bookRoutes = require("./search");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
