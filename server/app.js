require("dotenv").config();
require("./db/conn");

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 6001
const router = require("./Routes/router")


app.use(cors());
app.use(express.json());
app.use(router);
app.use("/uploads",express.static("./uploads"));
// app.get("/", (req, res) => {
//     res.status(201).json("Serve started");
// })

app.listen(PORT,() => {
    console.log(`server is running on Port Number ${PORT}`)
})