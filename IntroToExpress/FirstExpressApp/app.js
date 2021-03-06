var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!"); 
});
// "/bye" => "Goodbye"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog");
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
    console.log(req.params);
    res.send("Welcome to a subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + ", baby!");
});

// Tell Express to display the below every time
// get request is unrecognised 
// should always be at the bottom!!!
app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!!!");
});

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has Started");
});