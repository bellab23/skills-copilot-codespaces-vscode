// Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

app.post('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.comments.push(req.body);
            json = JSON.stringify(obj);
            fs.writeFile('comments.json', json, 'utf8', function(err) {
                if (err) {
                    console.log(err);
                } else {
                    res.send('Data saved to comments.json');
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});