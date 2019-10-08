var express = require('express')
var path = require('path') 
var app = express()

//Acces static files
app.use(express.static(path.join(__dirname, 'public')));

//Bodyparser
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

app.use('/user' , require('./routes/users'))
app.use('/community' , require('./routes/community'))

app.listen(3225)