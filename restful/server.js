var Sequelize = require("sequelize");
var todo = require("./models/todo");

module.exports = function(config){
    var db = {}
    var sequelize = null;

    db.sequelize = new Sequelize(
        config.dbname,
        config.username,
        config.userpassword,
        config.dbinfo
    )

    db.Sequelize = Sequelize;

    db.todo = todo(db.sequelize, Sequelize);
    db.sequelize.sync();

    return db;
}