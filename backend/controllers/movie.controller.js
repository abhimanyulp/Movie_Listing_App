const { MovieModel } = require("../models/movie.model")

//Get Movies Data
exports.getall =  async (req,res) => {
    try {
        const movies = await MovieModel.find()
        res.status(200).send({msg:"Data Retrived!", data: movies})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
}

//Post Movie
exports.post = async (req,res) => {
    try {
        const book = new MovieModel(req.body)
        await book.save()
        res.status(200).send({msg:"Movie has been added!"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
}

//Delete Movie
exports.delete = async (req,res) => {
    const { id } = req.params
    // console.log(id)
    try {
        await MovieModel.findByIdAndDelete({_id:id})
        res.status(200).send({msg:"Movie has been Deleted!"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
}