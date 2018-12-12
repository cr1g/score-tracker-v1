const mysql = require('mysql');

// environment variables
const DB_PASSWORD = process.env.DATABASE_PASSWORD;
const DB_NAME = process.env.DATABASE_NAME;
const DB_USER = process.env.DATABASE_USER;
const DB_HOST = process.env.DATABASE_HOST;


// create database connection
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});
connection.connect();

let createScoresTable =
    "CREATE TABLE IF NOT EXISTS scores (" +
    "team_a VARCHAR(100) NOT NULL," +
    "team_a_score INT UNSIGNED NOT NULL," +
    "team_b_score INT UNSIGNED NOT NULL," +
    "team_b VARCHAR(100)" +
    ")";

connection.query(createScoresTable)

connection.end();
