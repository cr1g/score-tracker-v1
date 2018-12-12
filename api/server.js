const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

// environment variables
const DB_HOST = process.env.DATABASE_HOST;
const DB_NAME = process.env.DATABASE_NAME;
const DB_PASSWORD = process.env.DATABASE_PASSWORD;
const DB_USER = process.env.DATABASE_USER;
const SERVICE_PORT = process.env.SERVICE_PORT;

// creates the app and defined the listening port
const app = express();
const port = SERVICE_PORT; 

app.use(bodyParser.json());
app.use(cors());

// creates database connection
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});
connection.connect();

app.get('/scores', (req, res) => {
    let sql = 'SELECT * FROM scores';

    let scores = [];
    connection.query(sql, (err, results) => {
        results.forEach((match) => {
            scores.push({
                'team_a': match['team_a'],
                'team_a_score': match['team_a_score'],
                'team_b_score': match['team_b_score'],
                'team_b': match['team_b']
            });
        });

        res.json(scores);
    });
});

app.post('/matches', (req, res) => {
    let reqData = req.body;
    let sql = 'INSERT INTO scores(team_a, team_a_score, team_b_score, team_b) VALUES(?, ?, ?, ?)';

    connection.query(sql, [
        reqData['team_a'], reqData['team_a_score'], reqData['team_b_score'], reqData['team_b']
    ], (err) => {
        if (err) {
            console.log(err);
            res.json({'message': 'Server exception. We are already working on this.'})
        } else {
            res.json({'message': 'Match submitted successfully.'});
        }
    });
});

// start the server
app.listen(port, () => {
    console.log("Server started...");
});
