var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//                     {
//                         name: "Bear Grounds", 
//                         image: "https://images.freeimages.com/images/large-previews/b22/camping-tent-2-1427666.jpg",
//                         description: "This is a huge granite hill, no bathrooms. Now Water. Beatiful granite!"
                        
//                     }, function(err, campground){
//                       if(err){
//                         console.log(err);  
//                       } else {
//                           console.log("NEWLY CREATED CAMPGROUND: ");
//                           console.log(campground);
//                       }
//                   });



var campgrounds = [
    {name: "Salmon Creek", image: "https://images.freeimages.com/images/large-previews/1bc/camping-1407985.jpg"},
    {name: "Bear Grounds", image: "https://images.freeimages.com/images/large-previews/b22/camping-tent-2-1427666.jpg"},
    {name: "St Mountain", image: "https://images.freeimages.com/images/large-previews/19a/tent-1-1552981.jpg"},
    {name: "Salmon Creek", image: "https://images.freeimages.com/images/large-previews/1bc/camping-1407985.jpg"},
    {name: "Bear Grounds", image: "https://images.freeimages.com/images/large-previews/b22/camping-tent-2-1427666.jpg"},
    {name: "St Mountain", image: "https://images.freeimages.com/images/large-previews/19a/tent-1-1552981.jpg"},
    {name: "Salmon Creek", image: "https://images.freeimages.com/images/large-previews/1bc/camping-1407985.jpg"},
    {name: "Bear Grounds", image: "https://images.freeimages.com/images/large-previews/b22/camping-tent-2-1427666.jpg"},
    {name: "St Mountain", image: "https://images.freeimages.com/images/large-previews/19a/tent-1-1552981.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    }); 
    // res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description; 
    var newCampground = {name: name, image: image, description: desc};
    //create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//The SHOW page following Restful convention
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp session has started!");
});