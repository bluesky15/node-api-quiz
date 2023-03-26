var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    res.send("hello world!")
})

app.listen(3001,()=>{
    console.log('application is running on the port 3000');
})