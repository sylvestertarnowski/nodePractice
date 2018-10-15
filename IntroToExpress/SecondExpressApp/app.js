var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:id", function(req, res) {
    var animal = req.params.id;
    var noise = "";
    if (animal !== "pig" && animal !== "cow" && animal != "dog"){
        res.send("Sorry, page not found... What are you doing with your life?");
    } else {
        console.log(animal);
        switch(animal) {
            case "pig":
                noise = "'Oink'";
                break;
            case "cow":
                noise = "'Moo'";
                break;
            case "dog":
                noise = "'Woof Woof!'";
                break;
        }
        res.send("The " + animal + " says " + noise);
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