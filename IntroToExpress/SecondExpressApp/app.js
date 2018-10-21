var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:id", function(req, res) {
    var sounds = {
        pig: "'Oink'",
        cow: "'Moo'",
        dog: "'Woof woof!'",
        cat: "'Meow'",
        crow: "'Caw caw!'"
    };
    var animal = req.params.id;
    var noise = sounds[animal];
    if(sounds[animal]) {
        res.send("The " + animal + " says " + noise);
    } else {
        res.send("Sorry, page not found...What are you doing with your life?")
    }
});

app.get("/repeat/:word/:number", function(req, res) {
    console.log("word and number repetition accessed");
    var word = req.params.word;
    var times = Number(req.params.number);
    var finalSentence = "";
    for(var i = 0; i < times; i++) {
        finalSentence += (word + " ");
    }
    res.send(finalSentence);
});

app.get("*", function(req, res) {
    console.log("random url accessed");
    res.send("Sorry, page not found...What are you doing with your life?");
});

//Tell express to listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has Started");
});