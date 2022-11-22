const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/dashboard',(req,res)=>{
    res.send("dashboard page")
})
app.listen(port,()=>{
    console.log('server started, port', port)
})