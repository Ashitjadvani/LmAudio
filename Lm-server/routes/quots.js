const express = require("express")
const router = express.Router()
const {findQuot, createQuot, editField, deleteField, editNestedField, editNestedArray, deleteNestedArray,editQuot, getSingleQuot, deleteQuot}= require("../controllers/quot")

router.get("/find-quot",findQuot)
router.get("/single-quot/:id",getSingleQuot)
router.post("/create-quot",createQuot)
router.put("/edit-quot/:id",editQuot)
router.put("/edit-field/:id",editField)
router.delete("/delete-feild/:id",deleteField)
router.put("/edit-nested-feild/:",editNestedField)
router.put("/edit-nested-array/:arrayId",editNestedArray)
router.delete("/delete-nested-array/:arrayId",deleteNestedArray)
router.delete("/delete-quot/:id",deleteQuot)


module.exports= router