#  README for burger's App

## Description
- Our main file, which houses most of the dependencies that we'll be using and the initial server set-up, is server.js
- We set up and populate our database with schema.js and seeds.js
- Then, we create our connection to the database in connection.js
- We develop our ORM to run simpler methods to query database (read, write, and update)
- Our controller takes in the data response from the queries, and then routes and renders it via Handlebars, resulting in a fully   
  functional app
- We have our GET request, which retrieves burgers; POST request, which adds burgers; and PUT request, which updates the status of burgers 
  from not devoured to devoured

## Requirements
- Allow user to add burgers
- Display existing and added burgers to the left-hand side of the app with a corresponding "EAT" button
- Display devoured burgers to the right-hand side of the app
- Store all burgers and their devoured state in a database
   
## Installation 
   Run node.js and perform an npm install to bring in all liabrary and necesarry node modules. The program is run with the command "node server.js"

## Application Heroku Link
The link below will give you direct access to Eat-Da-Burger web application using your web browser via the Heroku web service. (NOTE: There will be a momentary delay when first accessing the Heroku servers.)

* [Eat-Da-Burger](https://abdurezak.herokuapp.com)
  
##  Demo
 ![Demo](Demo/demoburger.gif)


## License
 © 2020 Abdurezak M Abdelkader, University of Richmond (Bootcamp Spot)