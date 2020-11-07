//Constant 
const express = require('express')
const app = express()
const port = 3000
const Path = require('path');
const bodyParser = require("body-parser");


//parse application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//response to localhost
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//Request(/hello/what ever we put in parameter) and response string
app.get('/hello/:name', (req, res) => {
    //uses send to send back text
    res.send('Hello you ' + req.params.name);
})

app.get('/api/movies', (req, res) => {
    //Json list
    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ]



    //browser respond with Json uses .json to send back json
    res.json({movies: myMovies});
})


//get request response is a html file 
app.get('/test', (req, res)=>{
    //uses .sendFile to back file
    res.sendFile(__dirname+ '/index.html');

})

app.get('/name', (req, res)=>{

    res.send('Hello '+ req.query.fname + ' ' + req.query.lname);

})

//send data using body-parser
app.post('/name', (req, res)=>{

    res.send('Hello ' +req.body.fname +' ' +req.body.lname);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
