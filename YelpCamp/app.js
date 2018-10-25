var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://images.freeimages.com/images/large-previews/1bc/camping-1407985.jpg"},
        {name: "Bear Grounds", image: "https://images.freeimages.com/images/large-previews/b22/camping-tent-2-1427666.jpg"},
        {name: "St Mountain", image: "https://images.freeimages.com/images/large-previews/19a/tent-1-1552981.jpg"}
    ];
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp session has started!");
});