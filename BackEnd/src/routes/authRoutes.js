const express = require("express")
const router = express.Router();

router.get("/register", (req, res)=>{
    res.send("Register Route Hit")
})

router.get("/login", (req, res)=>{
    res.send("Login Route Hit")
})

const {registerUser, loginUser} = require("../controllers/authController")



router.post("/register", registerUser)
router.post("/login", loginUser)

module.exports = router