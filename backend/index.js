const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { connection } = require("./configs/db")
const { userRouter } = require("./routes/user.route")
const { movieRouter } = require("./routes/movies.route")

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.status(200).send({ "msg": "Welcome - The Movie App!" })
})

app.use("/user", userRouter)
app.use("/movies", movieRouter)

let PORT = process.env.PORT || 8080 

app.listen(PORT, async () => {
    try {
        await connection
        console.log(`Connected to MongoDB`)
        console.log(`Server Running at http://localhost:${PORT}/`)
    } catch (error) {
        console.log("Not able to connect to MongoDB")
        console.log(error)
    }
})