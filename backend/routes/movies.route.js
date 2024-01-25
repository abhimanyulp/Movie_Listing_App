const express = require("express");
const movieRouter = express.Router();
const movieController = require("../controllers/movie.controller")

movieRouter.get("/getall", movieController.getall)
movieRouter.post("/post", movieController.getall)
movieRouter.get("/delete", movieController.delete)


module.exports = { movieRouter }