var express = require("express");
var bodyParser=require("body-parser");
var methodOverride=require("method-override")
var app = express();

var PORT = process.env.PORT|| 8080;
//// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(methodOverride("_method"));
// Parse request body as JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

// Set Handlebars.
const exphbs=require("express-handlebars"); // Set Handlebars.
app.engine("handlebars",exphbs({dafaultLayout:"main"}));
app.set("view engine","handlebars");

// Import routes and give the server access to them.
var routes=require("./controller/burger_controller.js");
app.use("/",routes);

///Port listener 
app.listen(PORT,function(){
    console.log("App now listening at localhost:"+ PORT);
});

