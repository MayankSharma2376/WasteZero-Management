const express = require("express")

const cors = require("cors")
require("dotenv").config();

const authRoutes = require("./routes/authRoutes")

const app = express();

app.use(cors())

app.use(express.json())

console.log("Auth routes loaded: ", authRoutes)

app.use("/api/auth", authRoutes)

app.get("/", (req, res)=>{
    res.send("WasteZero Backend Running")
})

app.get("/test", (req, res)=>{
    res.send("API Working")
})

module.exports = app