var express = require("express");
var middleware = require("./middleware");
var router = require("./router");
var persistance = require("../persistance");

module.exports = function(){
    db = persistance({
        dbname : 'rest_sample',
        username : 'root',
        userpassword : 'root',
        dbinfo : {
            host : 'localhost',
            dialect  : 'mysql'
        }
    })

    app = express();
    middleware(app);

    app.use("/", router(db));

    app.listen(3000, function(){
        console.log("server start on port 3000");
    });

    return app;
}