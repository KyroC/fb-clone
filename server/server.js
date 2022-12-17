const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('express').Router();

const indexRouter = require("./routes/index.js");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/', indexRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once(`open`, () => {
    console.log("MongoDB database has been establish successfully")
})

app.listen(port, () => {
    console.log(`Server is running on port; ${port}`);
});