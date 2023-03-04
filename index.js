const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.contentType = "application/json";
    res.send({
        'Name': 'Hello World'
    });
});

app.get('/movies/category', (req, res) => {
    fetch('DB/MOVIES.json')
        .then(response => {
            response.json().then(parsedValue => {
                res.contentType = "application/json";
                res.send(response);
            });
        })
});

async function getMovies() {
    const response = await fetch('https://firevideo.vercel.app/DB/MOVIES.json')
    return response;
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});