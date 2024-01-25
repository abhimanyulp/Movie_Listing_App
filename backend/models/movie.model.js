const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    imgUrl: String
})

const MovieModel = mongoose.model("movie", movieSchema)

module.exports = { MovieModel }