var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true}); //it makes a directory if it isn't present

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// add new cat to the database

var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

george.save(function(err, cat){
    if(err){
        console.log("Something went wrong!");
    } else {
        console.log("We just saved a cat to the DB: ");
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one