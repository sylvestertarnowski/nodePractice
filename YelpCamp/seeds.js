var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.freeimages.com/images/large-previews/1bc/camping-1407985.jpg",
        description: "Ham hock short ribs sirloin, biltong tongue shankle pancetta t-bone jerky. Flank picanha ground round frankfurter corned beef porchetta. Spare ribs bacon short loin venison pork chop. Capicola chuck jerky leberkas. Sirloin tongue short ribs ribeye meatball. Jerky fatback biltong leberkas pastrami jowl. Turkey ground round pork loin bresaola boudin, rump tenderloin alcatra sausage filet mignon doner."
    },
    {
        name: "Desert Mountains", 
        image: "https://images.freeimages.com/images/large-previews/964/scout-camp-1547941.jpg",
        description: "Ham hock short ribs sirloin, biltong tongue shankle pancetta t-bone jerky. Flank picanha ground round frankfurter corned beef porchetta. Spare ribs bacon short loin venison pork chop. Capicola chuck jerky leberkas. Sirloin tongue short ribs ribeye meatball. Jerky fatback biltong leberkas pastrami jowl. Turkey ground round pork loin bresaola boudin, rump tenderloin alcatra sausage filet mignon doner."
    },
    {
        name: "Canion Den", 
        image: "https://images.freeimages.com/images/large-previews/b5e/camping-1407408.jpg",
        description: "Ham hock short ribs sirloin, biltong tongue shankle pancetta t-bone jerky. Flank picanha ground round frankfurter corned beef porchetta. Spare ribs bacon short loin venison pork chop. Capicola chuck jerky leberkas. Sirloin tongue short ribs ribeye meatball. Jerky fatback biltong leberkas pastrami jowl. Turkey ground round pork loin bresaola boudin, rump tenderloin alcatra sausage filet mignon doner."
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
}

module.exports = seedDB;