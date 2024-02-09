const Router = require("express")
const User = require("../models/user")
const express = require("express")

const router = Router()

const middle = express.urlencoded({ extended: false })

router.get("/users", async (req, res) => {
    const users = await User.find()

    res.send(users)
})

router.post("/users", middle ,async (req, res) => {
    const headers = req.headers

    const firstName = headers.firstname
    const lastName = headers.lastname
    const email = headers.email
    const password = headers.password

    const newUser = {
        firstName,
        lastName,
        email,
        password
    }

    const user = await User.create(newUser)

    res.send(user)
})

module.exports = router

