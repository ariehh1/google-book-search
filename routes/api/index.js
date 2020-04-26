const router = require("express").Router();
const bookRoutes = require("./search");

// Book routes
router.use("/search", bookRoutes);

module.exports = router;
