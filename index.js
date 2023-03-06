const express = require('express')
const app = express()
const port = 3000
const moment = require('moment')
const member = require('./members')
const user = require('./users')

app.get("/", (req, res) =>{
    res.send(`This is the home page`);
});

app.get("/about", (req, res) =>{
    res.json({
        'Status': 'success',
        'Message': 'response success',
        'Description': 'Exercise #3',
        'Date': moment().format(),
        'Data': member.data()
    });
    res.end();
});

app.get("/users", (req, res) =>{
    // res.write(JSON.stringify(
    //     user.user()
    // ))
    // res.end();
    res.json(
        user.user()
    );
    res.end();
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});