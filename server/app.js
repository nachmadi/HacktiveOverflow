var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();

var routerUsers = require('./routers/user');
var routerQuestion = require('./routers/question');
var routerAnswer = require('./routers/answer');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(morgan('dev'));

app.use(cors()); // cors harus diatas map

app.use('/users', routerUsers);
app.use('/questions', routerQuestion);
app.use('/answers', routerAnswer);

//mongoose.connect('mongodb://localhost:27017/hacktive_overflow', (err)=> {
mongoose.connect('mongodb://nachmadi:bismillah23@cluster0-shard-00-00-kx0ii.mongodb.net:27017,cluster0-shard-00-01-kx0ii.mongodb.net:27017,cluster0-shard-00-02-kx0ii.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (err)=> {
  if (err) {
    console.log(err);
  } else {
    console.log('connect Mongoose.')
  }
})

app.listen(process.env.PORT||3000,()=>{
  console.log('Listening Port 3000')
});
