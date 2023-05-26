const express = require('express')
const path = require('path')
const app = express()
  
// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/views'));
  
// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('Test')
})
  
app.listen(5000, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})