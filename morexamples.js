var getReview = function (movie) {
    switch(movie){
        case "Toy Story 2":
            return "Great story. Mean prospecto.";
        break;
        case "Finding Nemo": 
            return "Cool animation, and funny turtles.";
        break;
        case "The Lion King":
            return "Great songs.";
        default:
            return "I don't know!";
    }
}

getReview("The Lion King");





var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name;
var age2 =susan.age;






var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];







var tri= function(obj, prop){
    console.log(obj[prop]);
}

var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

tri(dog,"age");