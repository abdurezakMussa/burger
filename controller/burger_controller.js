var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.

var burger=require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/",function(req,res){
    burger.selectAll(function(data){
        let hbsobj={
            burgers:data
        };
       // console.log("yes"+hbsobj)
        res.render("index",hbsobj);
    });
});

router.post("/",function(req,res){
    burger.insertOne(["burger_name","devoured"],[req.body.burger_name,req.body.devoured],function(){
        //send back the Id of the new burger 
        res.redirect("/");
    });
});

router.put("/:id", function(req,res){
    let condition="id = "+ req.params.id;
    console.log("condition",condition);
    burger.updateOne(
        {
            devoured: req.body.devoured
        }, 
        condition, function(){
            res.redirect("/")
         }
    );
});
//export routes for server.js to use it.
module.exports=router;


