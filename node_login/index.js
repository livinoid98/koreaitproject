var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

//Routes
app.get("/", function(req,res){
    res.redirect("/contacts");
});

//contacts
app.get("/contacts", function(req,res){
    ConstantSourceNode.find({}, function(req,res){
        if(err){
            return res.json(err);
        }
        res.render("contacts/index", {contacts:contatcs});
    });
});

app.get("/contacts/new", function(req,res){
    res.render("contacts/new");
});

app.post("/contacts", function(req,res){
    Contact.create(req.body, function(err,contact){
        if(err){
            return res.json(err);
        }
        res.redirect("contacts");
    });
});

app.listen(3000,function(req,res){
    console.log("server start on port 3000");
})