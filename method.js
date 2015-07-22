// Our bob object again, but made using a constructor this time 
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name= "Susan Jordan";
susan2.age=24;



//example of method\\

var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());


// new method


var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age =25;
susan.setAge= setAge;
susan.setAge(35);


// another new method


var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function(newWidth){
    this.width = newWidth;
};
rectangle.setHeight(6);
rectangle.setWidth(8);
  
  

// more examples

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function(){
    return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();