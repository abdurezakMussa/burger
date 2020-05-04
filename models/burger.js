// Import the ORM to create functions that will interact with the database.

const orm = require("../config/orm.js");

var burgers ={
    selectAll: function(cb){
        orm.selectAll("burger",function(res){
            cb(res);
        });
    },
    //the variables cols, and vals are an array
    insertOne: function(cols,vals,cb){
        orm.insertOne("burger",cols,vals,function(res){
           cb(res);
        });
    },
    updateOne: function(objColVals,condition,cb){
        orm.updateOne("burger",objColVals, condition, function(res){
            cb(res);
        });
    }
};
module.exports = burgers;