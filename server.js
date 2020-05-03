const express = require("express");
const PORT = process.env.PORT||5000;
const app = express();
const exphbs=require("express-handlebars"); // Set Handlebars.
const routes=require("./controller/burger_controller.js");
//// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars",express({dafaultLayout:"main"}));
app.set("view engine","handlebars");

// Import routes and give the server access to them.
app.use(routes);

///Port listener 
app.listen(PORT,function(){
    Console.log("App now listening at localhost:"+PORT);
});

