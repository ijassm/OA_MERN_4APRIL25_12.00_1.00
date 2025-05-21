const express = require('express');
const app = express();

app.get("/", (req, 
    
    
) => {
    res.send("Hello World");
})

app.get("/home", (req, res) => {
    res.send("Welcome to the home page");
})

app.listen(5000)

