//require express and use it to create our router from express.Router()
const express = require("express");
const router = express.Router();
  
const studentController = require("../controllers/number.controller")

//get all the numbers
router.get("/numbers", studentController.findAll)

//get a student by id 
router.get("/numbers/:id", studentController.findById)

//add a student
router.post("/numbers", studentController.add)


//update a student by id 
router.put("/numbers/:id", studentController.update)

//delete a student by id 
router.delete("/numbers/:id", studentController.delete)

module.exports = router;