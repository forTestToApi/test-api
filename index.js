const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
require("dotenv").config()

const router = require("./routes/main")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use(router)

const dev = async () => {
    try {
        const PORT = process.env.PORT || 4100
        app.listen(PORT, () => {
            console.log(`PORT started in http://localhost:${PORT}`)
        })
        mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected")
    } catch (err) {
        console.log(err)
    }
}

dev()