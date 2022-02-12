var express = require('express');
var app = express();

app.use('', (req, res)=> {
    res.send("Hello World");
})

app.listen(3001, (err) => {
    if(err) console.log("something error");
    console.log("your server listen on 3001");
})