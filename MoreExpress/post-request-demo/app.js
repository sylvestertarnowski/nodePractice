var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//need to use body-parser to access post request body
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

//friends needs to be global variable due to scope issues
var friends = ["Tony", "Miranda", "Justin", "Lily"];
    
app.get("/", function(req, res){
    res.send("home");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!!!");
});