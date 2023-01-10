const express= require('express')
const router = express.Router()

const collegeController= require("../controller/collegeController")
const internController= require("../controller/internController")
const validation = require("../validator/validator")

router.get("/servertest", (req, res) => res.send("server working fine !"))

router.post("/colleges",validation.collegeValidation ,collegeController.createCollege )

router.post("/interns",validation.internValidation, internController.createIntern)

router.get("/collegeDetails", collegeController.getColleges)

router.all("/*", (req,res) => {res.status(404).send( {msg:"Enter correct address"} ) })


module.exports= router