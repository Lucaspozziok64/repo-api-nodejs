const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get("/", (req, res) => {
    res.send("Wlcome to my API");
});

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conected to Mongodb Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => {
    console.log("Server listening on port", port);
});