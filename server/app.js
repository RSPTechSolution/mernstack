require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const PORT = 6001

app.get("/", (req, res) => {
    res.status(201).json("server starteddd");
});

app.listen(PORT,()=>{
    console.log(`Server running on port number ${PORT}`);
});