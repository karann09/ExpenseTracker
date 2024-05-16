const express = require ("express");
const cors = require("cors");
const app = express();
const { db } = require('./db/db');
const {readdirSync} = require('fs');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());


//routes
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' + route)));


db().then(() => {
    console.log('Connected to the database');
  }).catch((err) => {
    console.error('Error connecting to the database:', err);
    process.exit(1); 
  });

app.get('/', (req, res)=>{
    res.status(200).json({message : "Hello World"})
})

    
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`);
    });