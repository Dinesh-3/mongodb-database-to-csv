const express = require("express");
const router = express.Router();
const csvWriter = require("../csv/csv.js")
const datas = require("../database/database.js");

datas.find({}, (err,data) => {       
    csvWriter.writeRecords(data)
})

router.get("/download",(req,res) => {
    res.download("./data.csv")
})

module.exports = router;