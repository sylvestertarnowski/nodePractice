var express = require("express");
var app = express();

//tell express how to access public folder
app.use(express.static("public"));
//tell express that all files are ejs
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "My awesome girlfriend", author: "Sylwus"},
        {title: "The best doggo around", author: "Tosia"},
        {title: "Amazing supplements", author: "Tusia"},
    ];
    
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has Started");
});