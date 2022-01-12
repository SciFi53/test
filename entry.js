const express = require('express')
const app = express()
//middleware
app.set("view engine","ejs")
//routing
app.get('/',(req, res) => {
    res.render("home pg")
})
app.get('/student',(req, res) => {
    res.send("student")
})
app.get('/student/:rollno',(req, res) => {
    console.log(req.params)
    res.send('data of student x ${req.params.rollno}')
})
app.listen(3000,() => {
    console.log("hi there")
})