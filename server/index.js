const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const db =  require('./config/db');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.json("Hello world!");
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});