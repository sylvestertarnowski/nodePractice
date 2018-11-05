var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://cdn.pixabay.com/photo/2017/06/17/03/17/gongga-snow-mountain-2411069_960_720.jpg",
        description: "Heavenly, truly!"
    },
    {
        name: "Desert Mountains", 
        image: "https://cdn.pixabay.com/photo/2015/09/14/13/57/campground-939588_960_720.jpg",
        description: "Heavenly, truly!"
    },
    {
        name: "Canion Den", 
        image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_960_720.jpg",
        description: "Heavenly, truly!"
    },
];

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("Added a campground");
                        //create a comment on each cmapground
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
    });
    //add a few campgrounds
}

module.exports = seedDB;