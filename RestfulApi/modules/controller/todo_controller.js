var express = require("express");
var router = express.Router();

module.exports = function(db){
    router.get("/hello", function(req,res){
        res.json({
            "result" : true,
            "data" : {
                "message" : "hello world"
            }
        });
    });
    return router;
}