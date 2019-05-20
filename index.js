const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extened:false}))
app.set('view engine', 'ejs');
/* Test comment */
app.get('/register',(req,res)=> res.render('register'))

app.post('/welcome', (req,res) => res.send('hello' + req.body.username))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
