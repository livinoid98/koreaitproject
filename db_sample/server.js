var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql2");
var dbconfig = require("./config/database");
var connection = mysql.createConnection(dbconfig);

app.set("view engine", "ejs");
app.set("views", "/views");
app.use(express.static("/static"));
app.use(bodyParser.urlencoded({
    extended:false
}));

app.listen(3000, function(req,res){
    console.log("server start on 3000 port");
});

app.get('/', function(req,res){
    res.send("Root");
});

app.get('/persons', function(req,res){
    connection.connect();
    connection.query('select * from user_sample', function(err, rows){
        if(err){
            throw err;
        }

        console.log("The solution is : ", rows);
        res.send(rows);
    });
    connection.end();
});