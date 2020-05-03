var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.

let burger=require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/",function(req,res){
    burger.selectAll(function(data){
        let hbsobj={
            burger:data
        };
        console.log(hbsobj)
        
    });
});

router.post("/api/burger",function(req,res){
    burger.insertOne(["burger_name","devoured"],[req.body.burger_name,req.body.devoured],function(result){
        //send back the Id of the new burger 
        res.json({id:result.insertId});
    });
});

router.put("/api/burger/:id", function(req,res){
    let condition="id = "+ req.params.id;
    console.log("condition",condition);
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result){
            if(result.changedRows===0){
                 // If no rows were changed, then the ID must not exist, so 404
                 return res.status(404).end();
                }
                res.status(200).end();
         }
    );
});
//export routes for server.js to use it.
module.exports=router;