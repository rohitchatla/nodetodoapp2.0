//lib/packages imports	
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs'); 

/*
require('dotenv/config');
*/

//post routes
const postRoute=require('./routes/post');
app.use('/posts',postRoute);


//home routes
app.get('/',(req,res)=>{
//homepage..
});


//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>console.log('Connected to mongodb'));

//listening to server
app.listen(port,()=>console.log('Server in up and running'));





