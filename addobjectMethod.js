function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
 this.calcPerimeter = function() {
     return 2 *this.height + 2 * this.width;
 };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();


 
 
 //Ian tiene que ensenarme lo de arriba
 



// como agregar mas objetos y/o propiedades

 function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);

console.log("sally's species is " + sally.species + " and she is " + sally.age );
console.log("holden's species is " + holden.species + " and he is " + holden.age);





//otro ejemplo de agregar con method



function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

console.log("I am " + rabbit1.adjective );
console.log("I am " + rabbit2.adjective );
console.log("I am " + rabbit3.adjective );


// array object
//--------------------------------------------------//

function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);

//--------------------------------------------------------//
//using constructor,array,abj.

function Person (name, age) {
    this.name = name;
    this.age = age;
};
// Now we can make an array of people
var family = new Array();
 family[0]= new Person("alice",40);
 family[1]= new Person("bob",42);
 family[2]= new Person("michelle",8);
 family[3]= new Person("timmy",6);
// loop through our new array
for( i=0; i < family.length;i++){
    console.log( family[i].name );
};

//----------------------------------
// using constructor,object and if return.

function Person (name, age) {
    this.name = name;
    this.age = age;
}

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};
var olderAge = function(person1, person2) {
  
  if(person1.age > person2.age){
      return person1.age;
  }else{
      return person2.age;
  };
};
// Make a new function, olderAge, to return the age of
// the older of two people

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);
console.log("The older person is " + olderAge(alice, billy));
