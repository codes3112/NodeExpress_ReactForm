const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv/config');
const logger = require("morgan");
const app = express();
const port = process.env.PORT || 3001;
app.use(logger('dev'));
app.use(cors());

// Note: Body Parser should always be placed before routes
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Declare routes 
const routes= require('./routes/api');
//Route Middleware
{/* const formRouter = require('./routes/api/form');
app.use("/form",formRouter); */}

//Initialize routes 
app.use('/api',routes);

app.get('/', (req,res)=>{
    res.send("Node Server Home");
})

{/* error handling middleware */}
app.use(function(err,req,res,next){
res.status(422).send({error:err.message});
});

//connect to database
 mongoose.Promise=global.Promise;
 mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true},()=>
 {console.log("Connected to Db")}
 );


app.listen(port, ()=>{
    console.log("Server running on port :"+ port);
});


module.exports = app;