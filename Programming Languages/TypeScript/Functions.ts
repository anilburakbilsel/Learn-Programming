//                      ARROW FUNCTIONS in TypeScript and JavaScript                      //

// in software development, methods (functions) operate on the internal state of an object (or data) and 
//the object-to-object communication is done via methods.

//Arrow functions capture the "this" where the function is created rather than where it is invoked.
//arrow functions are always anonymous and effectively turn function(arguments){expression} into arguments => expression.
//if using an expression after an arrow, the return is implicit, so no return is required. 

///////-----------------------///////
//arrow function:
//arguments => expression
///////-----------------------///////


let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
// expected output: Array ["exuberant", "destruction", "present"]

////

let sum =(a, b) => a +b ;
console.log(sum(10, 30));

////

let array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

////

let developerss = [{name: 'Rob'}, {name: 'Jake'}];

let myOutout = developerss.map(developer => developer.name);
console.log(myOutout);

////
//fat arrow changes how "this" is handled.


////////////

// Filter an array for only odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Before...
let es5OddNumbers = numbers.filter(function(number) {
  return number % 2;
});
console.log(es5OddNumbers);

// After...
let es6OddNumbers = numbers.filter(number => number % 2);
console.log(es6OddNumbers);

// Parens are optional depending on the number of arguments:
let square = x => x * x;
console.log(square(10));

let add = (a, b) => a + b;
console.log(add(3, 4));

// `return` is implied if using an expression after an arrow.
let developers = [{name: 'Rob'}, {name: 'Jake'}];
// Before...
let es5Output = developers.map(function(developer) {
  return developer.name;
});
console.log(es5Output);

// After...
let es6Output = developers.map(developer => developer.name);
console.log(es6Output);

// Fat arrows change how `this` is handled.

// Before...
// In ES5, `bind()` or var that = this; are necessary as functions
// create their own `this`. We need to store the parent `this` in
// a variable that can be referenced in the callback or take care
// of binding ourselves.
function CounterES5() {
  this.seconds = 0;
  window.setInterval(function() {
    this.seconds++;
  }.bind(this), 1000); // or }.bind(this), 1000) and skip that = this
}

var counterA = new CounterES5();
window.setTimeout(function() {
  console.log(counterA.seconds);
}, 1200);

// After...
// ES6 Arrows instead bind `this` to the immediate enclosing
// lexical scope:
function CounterES6() {
  this.seconds = 0;
  window.setInterval(() => this.seconds++, 1000);
}

let counterB = new CounterES6();
window.setTimeout(() => console.log(counterB.seconds), 1200);

///////////////////////////////////////////////

//arrow functions, like function expressions can be used to return an object literal expression. The only caveat is taht the body
//needs to be wrapped in paratheses, in order to distinguish between a block and an object.

var setNameIdsEs6 = (id, name) => ({id: id, name: name});
console.log(setNameIdsEs6 (4, "Kyle"));  //Object {id:4, name: "Kyle"}

//or

function setLan(id, name){
    return {
        id: id,
        name: name
    }
}
let oguz = setLan(10, "anil");
console.log(oguz);
///////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////

/// Function Overloading in TypeScript 

// JavaScript and TypeScript are inherently very dynamic languages. It is not uncommon for a single JS function to return different types 
//of objects based on the shape of the arguments passed in.

let suits = ["hearts", "spades", "clubs", "diamonds"];
//we should provide the following method signatures for overloading in TypeScript
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
// Note that the function pickCard(x): any piece is not part of the overload list, so it only has two overloads: one that takes an object and 
// one that takes a number. Calling pickCard with any other parameter types would cause an error.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Functions are one of the fundemental building blocks in JavaScript (and most of the languages). A 
//function is a JavaScript procedure - a set of statements that performs a task or calculates a value. 
// To use a function, you must define it somewhere in the scope from which you wish to call it. 

// in JS and TS, primitive parameters (such as number) are passed to functions by value; the value is passed to the function,
// but if the function changes the value of the parameter, this change is not reflected globally or in the calling function. 

// If you pass an object (i.e. a non-primitive value, such as Array or a user-defined object) as a parameter and the function changes 
// the object's properties, that change is visible outside the function/

function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  var x, y;
  
  x = mycar.make; // x gets the value "Honda"
  
  myFunc(mycar);
  y = mycar.make; // y gets the value "Toyota"
                  // (the make property was changed by the function)

// Function expressions in JavaScript are not hoisted, unlike function declarations. We
//cannot use function expressions before we define them. 
 
var isHoisted = function() {   //this is a functuin expression
  console.log('bar');
};
isHoisted(); 


// A function created with a function declaration is a Function object and has all the properties,
//methods, and behavior of FUnction objects.
// By default, functions return undefined. To return any other value, the function must have a return
//statement that specifies the value to return. 
// Function declarations in JavaScript are hoisting the function definition. You can use the function before you declared it
function sayMyName(myName: string):number{
  console.log("your name is " + myName);
  return 0;
}


var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); }; //function expression
console.log(factorial(3));

