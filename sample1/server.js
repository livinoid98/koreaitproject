var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('./static'));
app.use(bodyParser.urlencoded({
    extended:false
}));

app.get("/star", function(req,res){
    res.send("star");
});

app.get("/dataset", function(req,res){
    res.render("dataset", {
        dataList:[
            {id:1, title:"안녕1", created_at:"2019-10-01"},
            {id:2, title:"안녕2", created_at:"2019-10-02"},
            {id:3, title:"안녕3", created_at:"2019-10-03"},
            {id:4, title:"안녕4", created_at:"2019-10-04"},
            {id:5, title:"안녕5", created_at:"2019-10-05"},
            {id:6, title:"안녕6", created_at:"2019-10-06"},
            {id:7, title:"안녕7", created_at:"2019-10-07"},
            {id:8, title:"안녕8", created_at:"2019-10-08"},
            {id:9, title:"안녕9", created_at:"2019-10-09"},
            {id:10, title:"안녕10", created_at:"2019-10-10"}
        ]
    });
});

app.get("/query_string", function(req,res){
    res.render("query_string", req.query);
});

app.get("/join", function(req,res){
    res.render("join/join");
});

app.get("/join_complete", function(req,res){
    res.render("join/join_complete", req.query);
});

app.post("/join_process", function(req,res){
    res.redirect("join_complete?emails="+req.body.user_email);
});

app.listen(3000, function(){
    console.log("server start on port 3000");
});