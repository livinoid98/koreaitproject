var bodyParser = require("body-parser");

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(function(req, res, next){
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
        res.header("Access-Control-ALlow-Headers", 'control-type');
        next();
    });
}