require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB dagtabase connection established successfully.");
})


const usersRouter = require('./router/userRouter');
app.use('/users', usersRouter);


app.listen(5000, ()=>{
    console.log("App is running on port 5000");
})