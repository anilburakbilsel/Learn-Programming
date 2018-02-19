let list0: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];
let a: boolean;
let abc: any = 45;
const ColorRed = 0;
const ColorGreen = 1;
enum COLORS { Mavi, Yesil, Siyah};  //enumaration  (index starts with 0)  this is how we declare enumaration in typescript
let backgroundcolor = COLORS.Mavi;  //enumeration
//////////////////////////////////////////////////////

//object literal in TypeScript and JavaScript
//An object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. 
//This minimizes the use of global variables which can cause problems when combining code.

let myObject = {   //here, myObject is an object literal
  sProp: 'some string value',     //a colon seperates property name from value
  numProp: 2,                     //a comma seperates each name-value pair from text
  bProp: false
};

var Swapper = {
  // an array literal
  images: ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
  pos: { // nested object literal
      x: 40,
      y: 300
  },
  onSwap: function() { // function (method)
      // code here
  }
};

//object literals undergo excess property checking when 

//////////////////////////////////////////////////////
//object destructuring
let o = {  //o is a simple object with fields in TypeScript
  a: "foo",
  b: 12,
  c: "bar"
};
let { a, b } = o;
console.log(a); //this will print out foo
//  o.a

///////////////////////////////////////////////////////

interface MyObjLayout {
  property: string;
}

var obj: MyObjLayout = { 
  property: "foo" 
};
///////////////////////////////////////////////////////

var call = {
  hasStarted: <boolean> null,
  hasFinished: <boolean> null,
  id: <number> null,
};

//or

var call = {
  hasStarted: null as boolean,
  hasFinished: null as boolean,
  id: null as number,
};

///////////////////////////////////////////////////////

//the spread operator
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
//This gives bothPlus the value [0, 1, 2, 3, 4, 5]. Spreading creates a shallow copy of first and second. They are not changed by the spread.


//we can also spread objects
let defaults = { 
  food: "spicy", 
  price: "$$", 
  ambiance: "noisy"
};
let search = { 
  ...defaults, 
  food: "rich"    //here, because this comes after the defaults, it will overwrite the food in defaults and change it to rich
};
// Now search is { 
//   food: "rich", 
//   price: "$$", 
//   ambiance: "noisy" 
// }   //the result is still an object
//you lose methods when you spread instances of an object
class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
clone.m(); // error!


///////////////////////////////////////////////////////
function sumMatrixFine(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
      var currentRow = matrix[i];
      for (let i = 0; i < currentRow.length; i++) {
          sum += currentRow[i];
      }
  }
  return sum;
}
//the above code is going to work completely fine
/////////////////////////////////////////////////////

const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
//const is not immutable, it's just cannot be re-assigned
///////////////////////////////////////////////////////////

//array destructuring
let input = [1, 2, 3, 4];
let [firstx, second] = input;
console.log(firstx); // outputs 1
console.log(second); // outputs 2
//This creates two new variables named first and second
// swap variables
[firstx, second] = [second, firstx];  //swapping them

///////////////////////////////////////////////////////////

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

//the following is only get 2 and 4
let [, secondx, , fourth] = [1, 2, 3, 4];
///////////////////////////////////////////////////////////

//swappin two numbers with destructuring expression
var g = 1;
var b = 3;

[g, b] = [b, g];
console.log(g); // 3
console.log(b); // 1
///////////////////////////////////////////////////////////

function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3
///////////////////////////////////////////////////////////

var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

///////////////////////////////////////////////////////////

//object destructuring
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let {a, b} = o;
//This creates new variables a and b from o.a and o.b. Notice that you can skip c if you don’t need it.

//Like array destructuring, you can have assignment without declaration:
({a, b} = {a: "baz", b: 101});

///////////////////////////////////////////////////////////

for (let i = 0; i < 10 ; i++) {
  setTimeout(function(){
      console.log(i); 
  }, 100 * i);
} //this will work completely fine, it will print 0,1,2,3,4,5,6,7,8,9

//////////////////////////////////////////////////////

let myString:string = "100";
let myStringNumber:number = parseInt(myString);
console.log(typeof myStringNumber);   //number
console.log(typeof myString);         //string

//////////////////////////////////////////////////////

//ternary operator
var letsTest:number = -2 
var ternary = letsTest > 0 ?"positive":"non-positive" 
console.log(result)
//it will output non-positive

//////////////////////////////////////////////////////

function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f(false, 0); // returns '0'
f(true, 0);  // returns '100'

//////////////////////////////////////////////////////

var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)    // 12 
console.log(Numbers.sval)   //static variable   10
var obj = new Numbers();  
console.log("Global num: "+obj.num_val)  // 13

//////////////////////////////////////////////////////
//factorial
let num = 5; 
let factorial = 1; 
while (num >= 1) { 
   factorial = factorial * num; 
   num--; 
} 
console.log("The factorial  is " + factorial);   //120

//////////////////////////////////////////////////////
//the for.. in loop
let j:any;   //its type could be string as well
let n:any = "abcd";  //the type of this must always be any

for(j in n) {
   console.log(n[j])  
}
//this will print out the following:
//a
//b
//c
//d

//////////////////////////////////////////////////////

var num:number = 5; 
var factorial:number = 1; 
while(num >=1) { 
   factorial = factorial * num; 
   num--; 
} 
console.log("The factorial  is "+factorial); 
//////////////////////////////////////////////////////

var n:number = 10;
do { 
   console.log(n); 
   n--; 
} while(n>=0);

//////////////////////////////////////////////////////

var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
   if (num % 2==0) {
      continue
   }
   count++
}
console.log (" The count of odd values between 0 and 20 is: "+count);

//////////////////////////////////////////////////////

//here are some different Infinite loops

for(;;) { 
  console.log(“This is an endless loop”) 
}

while(true) { 
  console.log(“This is an endless loop”) 
}
//////////////////////////////////////////////////////

//function defined 
function greet():string { //the function returns a string 
  return "Hello World" 
} 

function caller() { 
  var msg = greet() //function greet() invoked 
  console.log(msg) 
} 

//invoke function 
caller()

//////////////////////////////////////////////////////
//the optional parameter should be set as the last argument in a function. 
function disp_details(id:number,name:string,mail_id?:string) { 
  console.log("ID:", id); 
  console.log("Name",name); 
  
  if(mail_id!=undefined)  
  console.log("Email Id",mail_id); 
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");

/////////////////////////////////////////////////////

//rest parameters
function addNumbers(...nums:number[]) {  
  var i;   
  var sum:number = 0; 
  
  for(i = 0;i<nums.length;i++) { 
     sum = sum + nums[i]; 
  } 
  console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)

/////////////////////////////////////////////////////

//default parameters
function calculate_discount(price:number,rate:number = 0.50) { 
  var discount = price * rate; 
  console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)

//////////////////////////////////////////////////////

// anonymous functions are dynamically declared at runtime

var msg = function() { 
  return "hello world";  
};
console.log(msg())

//or

var res = function(a:number,b:number) { 
  return a*b;  
}; 

console.log(res(12,2)) 
//////////////////////////////////////////////////////
//recursive function
function factorial(number) {
  if (number <= 0) {         // termination case
     return 1; 
  } else {     
     return (number * factorial(number - 1));     // function invokes itself
  } 
}; 
console.log(factorial(6));      // outputs 720 

//////////////////////////////////////////////////////

//Lambda Expression

var fooxx = (x:number)=> 10 + x;

console.log(fooxx100))      //outputs 110 

//


var foosss = (x:number)=> {    
  x = 10 + x 
  console.log(x)  
};

foosss(100);  //it outputs 110


///////


var func = (x)=> { 
  if(typeof x=="number") { 
     console.log(x+" is numeric") 
  } else if(typeof x=="string") { 
     console.log(x+" is a string") 
  }  
} 

func(12); 
func("Tom");

////

var disp =()=> { 
  console.log("Function invoked"); 
} 
disp();  //Function invoked

//////////////////////////////////////////////////////

//function overloading
function disx(s1:string):void; 
function dispx(n1:number,s1:string):void; 

function dispx(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
dispx("abc") 
dispx(1,"xyz");
//////////////////////////////////////////////////////

//Number is the class in TypeScript

var month = 0 
if( month<=0 || month >12) { 
   month = Number.NaN 
   console.log("Month is "+ month) 
} else { 
   console.log("Value Accepted..") 
}

///////////////////////////////////////////////////////

//prototype example in TypeScript
function employeex(id:number,name:string) { 
  this.id = id 
  this.name = name 
} 

var emp = new employeex(123,"Smith") 
employeex.prototype.email = "smith@abc.com" 

console.log("Employee 's Id: "+emp.id) 
console.log("Employee's name: "+emp.name) 
console.log("Employee's Email ID: "+emp.email)

///////////////////////////////////////////////////////

//toExponential() 
var num1 = 1225.30; 
var val = num1.toExponential();  //we could put numbers inside the parenthesis as well 
console.log(val);   //it will output this number as string

//toFixed()
//the number of digits to appear after the decimal point
var num3 = 177.234;
console.log("num3.toFixed() is "+num3.toFixed());    //177
console.log("num3.toFixed(2) is "+num3.toFixed(2));  //177.23 
console.log("num3.toFixed(6) is "+num3.toFixed(6));  //177.234000
//again, the outputs are in strings

var num0 = new Number(50);
console.log("num3.toFixed() is "+num0.toFixed());    //50
console.log("num3.toFixed(2) is "+num0.toFixed(2));  //50.00

///
//toLocaleString()
var num7 = new Number(177.1234); 
console.log(num7.toLocaleString()); //again returns a string 177.1234
//Returns a human readable string representing the number using the locale of the environment


///
//toPrecision
var num10 = new Number(7.123456); 
console.log(num10.toPrecision());   //7.123456
console.log(num10.toPrecision(1));  //7
console.log(num10.toPrecision(2));  //7.1

///
//toString()
var numRadix = new Number(10); 
console.log(numRadix.toString());   //10
console.log(numRadix.toString(2));  //1010
console.log(numRadix.toString(8));  //12   (octal)
//the above code returns the strings (the string represantaiton of them)

///
//valueOf()
var numValue = new Number(10); 
console.log(numValue.valueOf());  //10 (returns this as a number)

//////////////////////////////////////////////////////

var anilburak = 'hello';             // primitive
var anilburakbilsel = new String('hello'); // wrapper object

typeof anilburak;  // "string"
typeof anilburakbilsel;  // "object"

anilburak == anilburakbilsel  // true
anilburak === anilburakbilsel // false

//////////////////////////////////////////////////////

//the String Class

var uname = new String("Hello World") 
console.log(uname) 
console.log("Length "+uname.length)  // returns the total number of characters 
                                     // including whitespace
///

function yourEmployee(id:number,name:string) { 
  this.id = id 
  this.name = name 
} 
var emp = new yourEmployee(123,"Smith") 
yourEmployee.prototype.email="smith@abc.com" 
console.log("Employee 's Id: "+emp.id) 
console.log("Employee's name: "+emp.name) 
console.log("Employee's Email ID: "+emp.email)

///

var str1 = new String( "This is string one" ); 

var index = str1.indexOf( "string" ); 
console.log("indexOf found String :" + index );  //8

var index = str1.indexOf( "one" ); 
console.log("indexOf found String :" + index ); //15
//it returns -1 if it cannot find that index
///

var str1 = new String( "This is string one and again string" ); 
var index = str1.lastIndexOf( "string" );
console.log("lastIndexOf found String :" + index );  //29
  
index = str1.lastIndexOf( "one" ); 
console.log("lastIndexOf found String :" + index ); //15

/////

var str1 = new String( "This is beautiful string" );
var index = str1.localeCompare( "This is beautiful string");  
console.log("localeCompare first :" + index );

//////////////////////////////////////////////////////

//In TypeScript, Interfaces are a powerfull way of defining contracts within your code as well as contracts with code outside of your project. 
//we can think interfaces as contracts. 

interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
let myObj = {
  size: 10,
  objNamer: "anil",
  label: "Size 10 Object"};
printLabel(myObj);  //Size 10 Object

///
//a different example:
//the declaration of the interface
//option  s (optional properties)
interface SquareConfig {  //this is an interface with optional property 
  color?: string,
  width?: number
}

function createSquare(config: SquareConfig): {color: string, area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
      newSquare.color = config.color;
  }
  if (config.width) {
      newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});  //this is the parameter that we are assigning
console.log(mySquare.area); //100
console.log(mySquare.color); //black
let mySecondSquare = createSquare({ color: "red", width: 100 });
//If an object literal has any properties that the “target type” doesn’t have, you’ll get an error.
//let myOtherSquare = createSquare({ width: 100, opacity: 0.5 }); //this will produce an error
let myOtherSquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);  //this is the type assertion method

////////
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}  //index signatures
//here we’re saying a SquareConfig can have any number of properties, and as long as they aren’t color or width, their types don’t matter.


////
//Readonly properties
//some properties should only be modifiable when an object is first created, we can specify this by putting readonly 

interface Point {
  readonly x: number;
  readonly y: number;
}

let point1: Point = { 
  x: 10, 
  y: 20 
};
//point1.x = 5; // error!


////// Readonly Arrays
//TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make 
//sure you don’t change your arrays after creation:

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
//ro[0] = 12; // error!
//ro.push(5); // error!
//ro.length = 100; // error!
//a = ro; // error!

//ReadonlyArray<T>  this is the way how we define readonly arrays in TypeScript

//////////////////////////////////////////////////////

//readonly vs const
// The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. 
// Variables use const whereas properties use readonly.
//////////////////////////////////////////////////////
//Another important example of interfaces
//Interfaces and Functions
//Function Types
//Interfaces are capable of describing the wide range of shapes that JavaScript objects can take. In addition to describing an object 
//with properties, interfaces are also capable of describing function types.

//To describe a function type with an interface, we give the interface a call signature. This is like a function declaration with only 
//the parameter list and return type given. Each parameter in the parameter list requires both name and type.
interface SearchFunc {
  (source: string, subString: string): boolean;    //returns a boolean
}

let mySearchFunc: SearchFunc;

mySearchFunc = function(src, sub){  //we could add :boolean 
    let result = src.search(sub);
    return result > -1;
}

//////////////////////////////////////////////////////

//Indexable Types

//Indexable types have an index signature that describes the types we can use to index into the object, along with the corresponding return types when indexing:
   
interface StringArray {             //this interface has an index signature
  [index: number]: string;          //this index signature states that when a StringArray is indexed with a number, it will return a string
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0]; //this will print Bob

//There are two types of supported index signatures: string and number.

interface ReadonlyStringArray {
  readonly [index: number]: string;    //it is not modifiable after it's initialized
}
let myArray0: ReadonlyStringArray = ["Alice", "Bob"];

//////////////////////////////////////////////////////

// Implementing an Interface
//One of the most common uses of interfaces in languages like C# and Java, that of explicitly enforcing that a class meets a particular contract, is also possible in TypeScript.

interface ClockInterface {
  currentTime: Date;   //we can define fields
  setTime(d: Date);   //we can define methods  (only the method signature, inside the class you can implement it as you want)
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}

//Interfaces describe the public side of the class, rather than both the public and private side. This prohibits you from using them to check that a 
//class also has particular types for the private side of the class instance.

//////////////////////////////////////////////////////

//the class has two types: the type of the static side and the type of the instance side.
//when a class implements an interface, only the instance side of the class is checked.

//constructor sits in the static side (it is related to class(static) side).
//constructors are part of the "static" part.


interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;    //new
}

interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);                         //return new
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

//Because createClock’s first parameter is of type ClockConstructor, in createClock(AnalogClock, 7, 32), it checks that AnalogClock has the correct constructor signature.

//////////////////////////////////////////////////////


//interfaces can extend each other as well. this allows us to copy the members of one interface into another, which gives us more flexibility in how
//we seperate our interfaces into reusable components.

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let mySquare0:Square = {
  color: "mavi",
  sideLength: 10
};

let square2 = <Square>{};
square2.color = "blue";
square2.sideLength = 10;

//////////
//an interface can extend multiple interfaces, creating a combination of all the interfaces
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square12 = <Square>{};
square12.color = "blue";
square12.sideLength = 10;
square12.penWidth = 5.0; 


//////////////////////////////////////////////////////////

//an important example about memory allocation and consts
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
//the arrays are not primiteve types, and they pass by reference (not value), so in this case, foo and bar reference the same memory space.
//it is const, and we still can modify it, because we allocate the space for the memory

//also arrays are mutable objects, therefore it lets us to mutate them.
//however, for example ints are immutable.

//const only prevents us to reassign a variable
//////////////////////////////////////////////////////

//hybrid types
//one such example is an object that acts as both a function and an object, with additional properties:

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

//////////////////////////////////////////////////////////////

//Interface Extending Classes

//when an interface type extends a class type it inherits the members of the class but not their implementations. It is as if the interface had declared
//all of the members of the class without providing an implementation. Interfaces inherit event the private and protected members of a base class. This means
//that when you create an interface that extends a class with private or protected members, that interface typem can only be implemented by that class or subclass of it.

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() { }
}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
  select() { }
}

class Location {

}

// In the above example, SelectableControl contains all of the members of Control, including the private state property. Since state is a private member 
// it is only possible for descendants of Control to implement SelectableControl. This is because only descendants of Control will have a state private member that 
// originates in the same declaration, which is a requirement for private members to be compatible.

// Within the Control class it is possible to access the state private member through an instance of SelectableControl. Effectively, a SelectableControl acts like a 
// Control that is known to have a select method. The Button and TextBox classes are subtypes of SelectableControl (because they both inherit from Control and have a 
// select method), but the Image and Location classes are not.

//////////////////////////////////////////////////////////////
interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

var point2D: Point2D = { 
  x: 0, 
  y: 10 
}

var point3D: Point3D = { 
  x: 0, 
  y: 10, 
  z: 20 
}

function iTakePoint2D(point: Point2D) { 
  /* do something */ 
}

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay

//iTakePoint2D({ x: 0 }); // Error: missing information `y`

//below by using `` we are using template strings
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`; //this's called template strings

// the below code is sname as the above code:
// let sentence2: string = "Hello, my name is " + fullName + ".\n\n" +
// "I'll be " + (age + 1) + " years old next month.";

//Array
let myArr0: number[] = [1, 2, 3];
let myArr1: Array<number> = [1, 2, 3]; //this uses generic array type, Array<elemType>

//Tuple
//tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. 
//For example, you may want to represent a value as a pair of a string and a number:
// Declare a tuple type
let myTuple: [string, number];
// Initialize it
myTuple = ["hello", 10]; // OK
// Initialize it incorrectly
//myTuple = [10, "hello"]; // Error
console.log(myTuple[0].substr(1)); // OK
//console.log(myTuple[1].substr(1)); // Error, 'number' does not have 'substr'

var myNewTuple = [10,"Hello","World","typeScript"]; //create a  tuple 
console.log("Tuple value at index 0 "+ myNewTuple[0]) 
//update a tuple element 
myNewTuple[0] = 121; //we can update it with a number     
console.log("Tuple value at index 0 changed to   "+ myNewTuple[0])

//Enumeration
//enum is a way of giving more friendly names to sets of numeric values
enum Color{   
  Kirmizi, Yesil, Mavi      //enum Color {Red = 1, Green, Blue}  it actually starts with 0
}
let renk: Color = Color.Yesil;


enum Renkler {Red = 1, Green, Blue}
let rengim: string = Renkler[2];  //be carefull that it is a color
alert(rengim); // Displays 'Green' as it's value is 2 above
/////////////
//any
let eminDegilim: any = 4;
eminDegilim = "maybe a string instead";
eminDegilim = false; // okay, definitely a boolean

let diffArray: any[] = [1,true, "free"];
diffArray[1] = 100;

//void
function dikkatEt(): void {
  alert("This is my warning message");
}

let foo: number = 123;
foo = null; // Okay
foo = undefined; // Okay

///////////////////////////////////
//the below is the strict null checking mode
//let foo = undefined;
//foo = null; // NOT Okay
//////////////////////////////////

//never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}
// Inferred return type is never
function fail() {
  return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {
  }
}

//Type Assertion
//type assertions are a way to tell the compiler "trust me, I know what I'm doing" (it's a type cast in other languages)
let smValue: any = "this is a string";
let stringLength: number = (smValue as string).length;  //type assertion
//////////////////////////////////
//const is an augmentation of let in that it prevents re-assignemnt to a variable

function sumOfMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
      var currentRow = matrix[i];
      for (var a = 0; a < currentRow.length; a++) {
          sum += currentRow[a];
      }
  }
  return sum;
}


// for (var i = 0; i < 10; i++) {
//   setTimeout(function() { console.log(i); }, 100 * i);
// }
// setTimeout will run a function after some number of milliseconds, but only after the for loop has stopped executing; 
// By the time the for loop has stopped executing, the value of i is 10. So each time the given function gets called, it will print out 10! 
//here is the solution for the above problem:
for (var i = 0; i < 10; i++) {
  // capture the current state of 'i'
  // by invoking a function with its current value
  (function(i) {
      setTimeout(function() { console.log(i); }, 100 * i);
  })(i);
}


// function fok(input: boolean) {
//   let a = 100;
//   if (input) {
//       // Still okay to reference 'a'
//       let b = a + 1;
//       return b;
//   }
//   // Error: 'b' doesn't exist here
//   return b;
// } //here we have two local variables a and b


// try {
//   throw "oh no!";
// }
// catch (e) {
//   console.log("Oh well.");
// }
//
// // Error: 'e' doesn't exist here
// console.log(e);



/////////////////////////////////////////////////////////////////////

//let's assume we have a ts file named app.ts 
//we should use a source-to-source compiler (tanscompiler/transpiler) like tsc
//tsc app.ts
//this will generate a JavaScript version of the .ts file passed to it (transpilation)

let list0: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];
let a: boolean;
let abc: any = 45;
const ColorRed = 0;
const ColorGreen = 1;
enum COLORS { Mavi, Yesil, Siyah};  //enumaration  (index starts with 0)  this is how we declare enumaration in typescript
let backgroundcolor = COLORS.Mavi;  //enumeration
//////////////////////////////////////////////////////

var message:string = "Hello World";
console.log(message);



//////////////////////////////////////////////////////
//type assertion
let someValue: any = "this is a string";
let strLength:number = (someValue as string).length;
//or we could do:
//let strLength: number = (<string>someValue).length;

function f(input: boolean) {
    let a = 100;
    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;  //b only exists here
    }
    // Error: 'b' doesn't exist here
    return b;   //error
}



let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope


function fak(x) {
    let x = 100; // error: interferes with parameter declaration
}

function sumMatrix(matrix: number[][]) {  //this is a correct fine implementation
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}

///////////////////////////////////////////////////////////

//any variable which is declared as var, is scoped to the nearest function

function doSomething(){
  for(let i=0;i<5;i++){
      console.log(i);
  }
  console.log(i);    //this will still be compiled to javascript and work fine, becuse let is going to replaced by var
 }
doSomething();


function doSomething2(){
  for(var i=0;i<5;i++){    //the above code gives an error, but this one gives no error
      console.log(i);      //this's not giving error since we are using var here
  }                        //var is scoped (hoisted) to the nearest function, so in this case it becomes up
  console.log(i);
}
doSomething2();
////////////////////////////////////////////

let message1:string = "abc";
let baba:boolean = message1.endsWith('c');
console.log(baba);

//////////////////////////////////////////////

function log(message){
  console.log(message);
}
var message = "Hello World";
log(message);

//we can also have tuples, tuples can have different data types
let tuple0: [string, number];
tuple0 = ["hello", 10];  //this will work fine
//tuple0 = [10, "hello"];   //this will not work, it will give an error, since the order of data types are wrong
tuple0[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(tuple0[5].toString()); // OK, 'string' and 'number' both have 'toString'
//tuple0[6] = true; // Error, 'boolean' isn't 'string | number'

let strArr: string[];
strArr = ["anil", "burak"];


enum Color {Red, Green, Blue}  //normally the indices start with 0
let c: Color = Color.Green;


enum Color2 {Red = 1, Green, Blue}
let colorName: string = Color2[2];
alert(colorName); // Displays 'Green' as it's value is 2 above

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let notSure1: any = 4;
notSure1.ifItExists(); // okay, ifItExists might exist at runtime
notSure1.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let list3: any[] = [1, true, "free"];
list3[1] = 100;



function warnUser(): void {
  alert("This is my warning message");
}


let unusable: void = undefined;  //we can only assign undefined or null to the variables of type void

//////////////////////////////////////


function f() {
  var a = 10;
  return function g() {
      var b = a + 1;
      return b;
  }
}
var fn = f();
fn(); // returns '11'


function f1() {
  var a = 1;

  a = 2;
  var b = g();   //here we assign b as 2
  a = 3;

  return b;

  function g() {
      return a;
  }
}

f1(); // returns '2'
//////////////////////////////////


function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
      var currentRow = matrix[i];
      for (let i = 0; i < currentRow.length; i++) {
          sum += currentRow[i];
      }
  }

  return sum;
}

//since we are using let, the above code is going to work properly

///////////////////////////////////

function fok(condition, x) {
  if (condition) {
      let x = 100;
      return x;
  }
  return x;
}
fok(false, 0); // returns '0'
fok(true, 0);  // returns '100'

////////////////////////////


function fa(shouldInitialize: boolean) {
  if (shouldInitialize) {
      var x = 10;
  }
  return x;
}
fa(true);  // returns '10'
fa(false); // returns 'undefined

//////////////////////////////
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number{ 
  return x + y; 
};


let myAdd2: (x: number, y: number) => number =
function(x: number, y: number): number { return x + y; };

////////////////////////////////////////////////////

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { 
  firstName: "Jane", 
  lastName: "User" 
};

document.body.innerHTML = greeter(user);

///////////////////////////////////////////////

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}   //the end of the class

interface Person2 {
  firstName: string;
  lastName: string;
}  //the end of the interface

function greeter2(person : Person2) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter2(user2);


///////////////////////////////////////////////


// TypeScript is object-oriented JavaScript
// TypeScript supports object-oriented programming
//features like classes, interfaces. etc...

//Number - All numeric values are represented by the number type, there aren't separate definitions for integers, floats or others.
//String - The text type, just like in vanilla JS strings can be surrounded by 'single quotes' or "double quotes".
//Boolean - true or false, using 0 and 1 will cause a compilation error.
//Any - A variable with this type can have it's value set to a string, number, or anything else.
//Arrays - Has two possible syntaxes: my_arr: number[]; or my_arr: Array<number>.
//Void - Used on function that don't return anything.


// Here we define our Food interface, its properties, and their types.
interface Food {
  name: string;
  calories: number;
}

// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
function speak(food: Food): void{
console.log("Our " + food.name + " has " + food.calories + " calories.");
}

// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
name: "ice cream", 
calories: 200
}

speak(ice_cream);


//////////////////////////////////////////

/home/abilsel/mono_repo/device/wearable_device_sw/sdk/types/wat.d.ts

class Menu {
  // Our properties:
  // By default they are public, but can also be private or protected.
  items: Array<string>;  // The items in the menu, an array of strings.    //or we could say item: string[]
  pages: number;         // How many pages will the menu be, a number.

  // A straightforward constructor. 
  constructor(item_list: Array<string>, total_pages: number) {
    // The this keyword is mandatory.
    this.items = item_list;    
    this.pages = total_pages;
  }

  // Methods
  list(): void {
    console.log("Our menu for today:");
    for(var i=0; i<this.items.length; i++) {
      console.log(this.items[i]);
    }
  }

} 

// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

// Call the list method.
sundayMenu.list();



//the below code should be in a different file

class HappyMeal extends Menu {
  // Properties are inherited

  // A new constructor has to be defined. (!!!!!!)
  constructor(item_list: Array<string>, total_pages: number) {
    // In this case we want the exact same constructor as the parent class (Menu), 
    // To automatically copy it we can call super() - a reference to the parent's constructor.
    super(item_list, total_pages);
  }

  // Just like the properties, methods are inherited from the parent.
  // However, we want to override the list() function so we redefine it.
  list(): void{
    console.log("Our special menu for children:");
    for(var i=0; i<this.items.length; i++) {
      console.log(this.items[i]);
    }

  }
}

// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);

// This time the log message will begin with the special introduction.
menu_for_children.list();



////////////////////////////////////////////////////////////////

//Generics are templates that allow the same function to accept arguments of various different types.
//Creating reusable components using generics is better than using the any data type, as generics preserve 
//the types of the variables that go in and out of them.


// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.

// Receives one argument of type T,
// Returns an array of type T.

function genericFunc<T>(argument: T): T[] {    
  var arrayOfT: T[] = [];    // Create empty array of type T.
  arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
  return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0])   // String

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0])   // number



/////////////////////////////////////

// the below code is in the file exporter.ts

var sayHi = function(): void {
    console.log("Hello!");
}

export = sayHi;



//the below code is in the file importer.ts

import sayHi = require('./exporter');
sayHi();


// ---------- VARIABLES ----------


var burger: string = 'hamburger',     // String 
calories: number = 300,           // Numeric
tasty: boolean = true;            // Boolean

 

// Variables must start with a letter, _, or $
// and then can contain numbers
 
// Declaring variables as statically typed is optional
// If you only provide a value the type is inferred
 
var myName: string = "Derek";

var myAge: number = 41;
 
// booleans can only be true or false
var canVote: boolean = true;
 
// A variable marked as any is a dynamic type
var anything: any = "dog";
anything = 2;
 
// You can print in the defined element
document.getElementById("tsStuff").innerHTML = "My Name is " + myName;
 
// A variable that didn't get a value assigned
// gets undefined
 
// null is a user assigned value saying that
// no value is assigned
 
// typeof returns the data type
document.write("myName is a " + typeof(myName) + "<br />");
document.write("canVote is a " + typeof(canVote) + "<br />");
document.write("anything is a " + typeof(anything) + "<br />");
 
// We can convert strings to numbers
var strToNum: number = parseInt("5");
document.write("strToNum is a " + typeof(strToNum) + "<br />");
 
// toString() converts anything into a string
var numToStr: number = 5;
document.write("numToStr is a " + typeof(numToStr.toString()) + "<br />");
 
// You define constants with const
const PI = 3.14159;
 
// ---------- INTERFACES ----------
// An interface can be used to describe complex
// types
 
interface SuperHero {
  realName: String;
  superName: String;
}
 
var superman: SuperHero = {
  realName: "Clark Kent",
  superName: "Superman"
}
 
// It is best to always separate with +
document.write(superman.realName + " is " + superman.superName + "<br />");
 
// More on interfaces below
 
// ---------- ARRAYS ----------
 
// Creates an array of strings that only excepts
// string values
var employees: string[] = ["Bob", "Sally", "Sam"];
 
// This would cause an error
// employees.push(5);
 
// Print all values in array
document.write(employees.toString() + "<br />");
 
// You can create arrays of interfaces
var superheroes: SuperHero[] = [];
 
superheroes.push({
  realName: 'Bruce Wayne',
  superName: 'Batman'
});
 
document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");
 
// ---------- MATH ----------
 
document.write("5 + 4 = " + (5+4) + "<br />");
document.write("5 - 4 = " + (5-4) + "<br />");
document.write("5 * 4 = " + 5*4 + "<br />");
document.write("5 / 4 = " + 5/4 + "<br />");
document.write("5 % 4 = " + 5%4 + "<br />");
 
// If you try to add anything to a string both
// become strings
// the below code will print out:
// 5 + String 2 =52
document.write("5 + String 2 = ", (5+'2') + "<br />");
 
var randNum: number = 1;
 
// If you increment after the current value is used
// and then it is incremented after
// The same is true with placing the -- after the
// variable
document.write("randNum++ = " + randNum++ + "<br />");  //1
document.write("++randNum = " + ++randNum + "<br />");  //3
document.write("randNum-- = " + randNum-- + "<br />");  //3 
document.write("--randNum = " + --randNum + "<br />");  //1         
 
// ---------- CONDITIONALS ----------
// If, Switch and the Ternary operator work
// the same in TypeScript as in JS
 
// Variables defined with let in blocks don't
// change the value of variables outside the block
 
let sampLet = 123;
if (true) {
    let sampLet = 456;
}
document.write("sampLet : " + sampLet + "<br />");   //this will print out 123
 
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write("sampVar : " + sampVar + "<br />"); //this will print out 456
 
// ---------- LOOPING ----------
// Looping works the same in TypeScript as in JS
// but for..of is added to get values in either
// an array or string
 
var randArray = [5,6,7,8];
 
// for..in provides the indexes
for(var val in randArray){
  document.write(val + "<br />");   //this will print out the indexes: 0 1 2 3  
}
 
// Convert a number array into a string array
var strArray = randArray.map(String)   
 
// for..of provides the values
for(var val of strArray){
  document.write(val + "<br />");  //this will print out 5 6 7 8
}
 
// ---------- FUNCTIONS ----------
 
// You can assign the variable types for the attributes
// You assign the return type after the attributes
// or if nothing is returned use void
var getSum = function(num1: number, num2: number): number{
  return num1 + num2;
}
 
var theSum1: number = getSum(5,2);
 
document.write("5 + 2 = " + theSum1 + "<br />");
 
// Assign a default value in the function declaration
// If an attribute isn't required follow the variable
// with a ?
var getDiff = function(num1: number, num2 = 2, num3?: number): number{
 
  // Check if a value was assigned with typeof
  if (typeof num3 !== 'undefined'){
    return num1 - num2 - num3;
  }
  return num1 - num2;
}
 
document.write("5 - 2 = " + getDiff(5) + "<br />");
document.write("5 - 2 - 3 = " + getDiff(5,2,3) + "<br />");
 
// You can receive an unknown number of values
// with a rest parameter ...nums
var sumAll = function(...nums: number[]): void{
 
  // We can use reduce with the array to add all
  // the values together one by one
  var sum = nums.reduce((a, b) => a + b, 0);  //reduce will cycle through the array
  document.write("Sum : " + sum + "<br />");
}
 
sumAll(1,2,3,4,5);
 
// Arrow functions don't include function in
// the definition
 
var addOne = (x)=>x+1;
 
document.write("1 + 1 = " + addOne(1) + "<br />");  //this will print out 2
 
// ---------- CLASSES ----------

// a class ub terms of OOP is a blueprint for creating objects.
 
// Classes describe real world objects by defining
// their attributes (fields) and capabilities
// (methods)
 
class Animal {
 
  // class fields
  public favFood: string;
 
  // static fields have values that are shared
  // by every object
  static numOfAnimals: number = 0;
 
  // If you define an attribute with private
  // the value is automatically assigned
  constructor(private name: string, private owner: string){
    Animal.numOfAnimals++;
  }
 
  // You can define methods as private but then
  // it can't be seen by subclasses, or accessed
  // by any code other then that within the class
  ownerInfo() {
    document.write(this.name + " is owned by " + this.owner + "<br />");
  }


  // a static method belongs to the class itself and a non-static (aka instance) method
  // belongs to each object that is generated from that class. 
 
  // Static methods are accessed using the class
  // name
  static howManyAnimals(): number{
    return Animal.numOfAnimals;
  }
 
  // Define getters and setters
 
  private _weight: number;
 
  get weight(): number{
    return this._weight;
  }
 
  set weight(weight: number){
    this._weight = weight;
  }
 
}   //this is the end of the class Animal
 
// Create an Animal object
var spot = new Animal("Spot", "Doug");
  
spot.ownerInfo();   // Spot is owned by Doug
 
spot.weight = 100
 
document.write("Spot's weight is " + spot.weight + "<br />");
 
// You can only access static methods by proceeding
// it with the class name
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
 
// You can inherit all methods and fields from
// another class with extends
// Additional methods and fields can be added
// or overwritten
 
class Dog extends Animal{
  constructor(name: string, owner: string){
    super(name, owner);     //we should do it
    Dog.numOfAnimals++;
  }
}
 
var grover = new Dog("Grover", "Jimmy");
 
// A call to howManyAnimals() is now 2
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");   //# of animals: 2
 
// Use instanceof to check for inheritance
document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");  //Is a Dog an Animal: true
 
// Check if a field exists for an object
document.write("Does grover have a name : " + ('name' in grover) + "<br />");    // Does grover have a name: true
 
// ---------- INTERFACES 2 ----------
// Interfaces define a contract in which if a
// class implements it is must create all
// functions defined in the interface
 
interface Vehicle {
  drive(): any;
}
 
class Car implements Vehicle{
  constructor(private wheels: number){}
 
  drive(): void{
    document.write("The car drives with " + this.wheels + " wheels<br />");
  }
}
 
class Bicycle implements Vehicle{
  constructor(private wheels: number){}
 
  drive(): void{
    document.write("The bicycle drives with " + this.wheels + " wheels<br />");
  }
}
 
var car = new Car(4);    //has 4 wheels
var bike = new Bicycle(2); // has 2 wheels
 
car.drive();   //The car drives with 4 wheels
bike.drive();  //The bicylce drives with 2 wheels
 
// ---------- GENERIC FUNCTIONS ----------
// We use generic functions when we want
// to be able to work with multiple data
// types in similar ways
 
// To create a generic function we place
// 1 or more data type markers in angled
// brackets after the function name. We
// then use those data type markers
// instead of actual data types.
 
function GetType<T>(val: T): string{    //any kind of data type (T) and it will return a string
  return typeof(val);                   //it returns the type of the value
}  
 
var aStr = "A String";
var aNum = 10;
 
document.write(GetType(aStr) + "<br />");    //string
document.write(GetType(aNum) + "<br />");    //number
 
// You define a generic function that
// excepts any class that implements
// an interface
 
function GetWheels<w extends Vehicle>(veh: w): number    //it will work for anything that has the Vehicle interface
{
  return veh.drive();  
}
 
GetWheels(car);
GetWheels(bike);
 
// You can also define generic classes that
// can work with multiple data types
 
class GenericNumber<T>{
 
  // An arrow function as described above
  add: (val1: T, val2: T) => T;
}
 
var aNumber = new GenericNumber<number>();
 
// Define how we want add to work with numbers
aNumber.add = function(x, y){return x + y;};
 
document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");
 
var aStrNum = new GenericNumber<string>();
 
// Define how we want add to work with strings
aStrNum.add = function(x, y){return String(Number(x) + Number(y));};
 
document.write("5 + 6 = " + aStrNum.add("5", "6") + "<br />");    // 5 + 4 = 9
 
// ---------- DESTRUCTORING ----------
// You can assign multiple values on one line
 
var randVals = {x: 1, y: 2, z: 3};
var {x, y, z} = randVals;
 
document.write(x + y + z + "<br />");   //6 
 
// Do the same with arrays
[x, y, z] = [z, y, x];
document.write("Switch : " + x + y + z + "<br />");  //321
 
// ---------- TEMPLATE STRINGS ----------
// Create multiline strings
var multStr = `I go on for
many lines<br />`;
document.write(multStr);    //I go on for many lines
 
// You can use string interpolation
document.write(`<b>${multStr}</b>`);  //I go on for many lines (but now this will be printed in bold)
 
// ---------- SPREAD OPERATOR ----------
// We can separate values in an array into
// attributs in a function
 
function theSum(x, y, z): void{
  document.write("Sum : " + (x + y + z) + "<br />");
}
 
var args = [4, 5, 6];
 
theSum(...args);
 
// ---------- ENUMS ----------
// Enums are number based in TS
 
enum Emotion {
  Happy = 1,   //it will start as 0 otherwise
  Sad,
  Angry
};
 
var myFeeling = Emotion.Happy;
 
// Same as
 
myFeeling = 1;

//////////////////////////////////

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
 
console.log(square.area); // 100

//////////////////////////////////
//interfaces: 
interface Todo{
  title: string;
  text: string;
}
function showTodo(todo: Todo){
  console.log(todo.title+ ": " + todo.text);
}
let myTodo = {title: "Trash", text: " Take out Trash"};
showTodo(myTodo);

//////////////////////////////////

interface UserInterface{
  name: string;
  mail: string;
  age: number;
  payInvonience();
}

class Adam implements UserInterface{
   name: string;
   mail: string;
   age: number; //we can access it only from inside the class

  constructor(name: string, mail: string, age: number){
    this.name = name;
    this.age = age;
    this.mail= mail;
  }
  payInvonience(){
    console.log(this.name + " paid invoince");
  }
}

class Ahmet extends Adam{
  tc: number;
  constructor(tc: number, name: string, mail: string, age: number){
    super(name,mail,age);
    this.tc = tc;
  }
  payInvonience(){
    super.payInvonience();
  }
}

//////////////////////////////////
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!

//The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. 
//Variables use const whereas properties use readonly.

//////////////////////////////////

interface SearchFunc {  //interface for function types
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

/* let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {  //this is valid as well
    let result = src.search(sub);
    return result > -1;
} */

//////////////////////////////////

interface ClockInterface {
  currentTime: Date;   //field
  setTime(d: Date);    //function
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}

//a class implements an interface, only the instance side of the class is checked. 

//////////////////////////////////

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

//////////////////////////////////

class Animal {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {   //override method
      console.log("Galloping...");
      super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
dog.bark();

//////////////////////////////////

class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
  constructor() { super("Rhino"); }
}

class Employee {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;    //they are compatible
animal = employee; // Error: 'Animal' and 'Employee' are not compatible


//////////////////////////////////

class Person {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }

  public getElevatorPitch() {
      return "Hello, my name is ${this.name} and I work in ${this.department}.";   //Notice that while we can’t use name from outside of Person, 
                                    //we can still use it from within an instance method of Employee because Employee derives from Person.
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error we can’t use name from outside of Person

//////////////////////////////////

class Person {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // Error: The 'Person' constructor is protected


//////////////////////////////////

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
      this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.

//////////////////////////////////

let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "anil bilsel";
if (employee.fullName) {
    console.log(employee.fullName);  //anil bilsel
}


//////////////////////////////////
//statics

class Grid {

  static origin = {  //we can only access it by using Grid.origin.x or Grid.origin.y
    x: 0, 
    y: 0
  };

  calculateDistanceFromOrigin(point: {
    x: number; 
    y: number;
  }) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor (public scale: number) {
   } //default constructor
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

//////////////////////////////////
interface Point{
  x: number;
  y: number;
}

let myPoint:Point = {
  x: 10,
  y: 10
};

let secondPoint:Point = {
  x: 10,
  y: 10
};

class Grid {
  static origin = {x: 0, y: 0};
  calculateDistanceFromOrigin(point: Point) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale


console.log(grid1.calculateDistanceFromOrigin(myPoint));
console.log(grid2.calculateDistanceFromOrigin(secondPoint));


//////////////////////////////////


abstract class Department {
  
      constructor(public name: string) {
      }
  
      printName(): void {
          console.log("Department name: " + this.name);
      }
  
      abstract printMeeting(): void; // must be implemented in derived classes
  }
  
  class AccountingDepartment extends Department {
  
      constructor() {
          super("Accounting and Auditing"); // constructors in derived classes must call super()
      }
  
      printMeeting(): void {
          console.log("The Accounting Department meets each Monday at 10am.");
      }
  
      generateReports(): void {
          console.log("Generating accounting reports...");
      }
  }
  
  let department: Department; // ok to create a reference to an abstract type
  department = new Department(); // error: cannot create an instance of an abstract class
  department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
  department.printName();
  department.printMeeting();
  department.generateReports(); // error: method doesn't exist on declared abstract type


  //////////////////////////////////
  class Greeter {
    
        static standardGreeting = "Hello, there";
    
        greeting: string;
    
        greet() {
            if (this.greeting) {  //if greeting is defined
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        }
    }
    
    let greeter1: Greeter;
    greeter1 = new Greeter();
    console.log(greeter1.greet());
    
    let greeterMaker: typeof Greeter = Greeter;
    greeterMaker.standardGreeting = "Hey there!";
    
    let greeter2: Greeter = new greeterMaker();
    console.log(greeter2.greet());

//In this example, greeter1 works similarly to before. We instantiate the Greeter class, and use this object.

//then, we create a new variable called greeterMaker. This variable will hold the class itself, or said another way its
//constructor function.Here we use typeof Greeter, that is “give me the type of the Greeter class itself” rather than the instance 
//type. Or, more precisely, “give me the type of the symbol called Greeter,” which is the type of the constructor function. This 
//type will contain all of the static members of Greeter along with the constructor that creates instances of the Greeter class. 
//We show this by using new on greeterMaker, creating new instances of Greeter and invoking them as before.

//////////////////////////////////

class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {  //this is completely valid
  z: number;
}

let point3d: Point3d = {   
  x: 1, 
  y: 2, 
  z: 3
};


//////////////////////////////////
//Functions
// Named function
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd = function(x, y) { 
  return x + y; 
};

//////////////////////////////////

//////////////////////////////////////////////////////
//type assertion
let someValue: any = "this is a string";
let strLength:number = (someValue as string).length;
//or we could do:
//let strLength: number = (<string>someValue).length;

function f(input: boolean) {
    let a = 100;
    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;  //b only exists here
    }
    // Error: 'b' doesn't exist here
    return b;   //error
}



let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope


function fak(x) {
    let x = 100; // error: interferes with parameter declaration
}

function sumMatrix(matrix: number[][]) {  //this is a correct fine implementation
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}

///////////////////////////////////////////////////////////

//any variable which is declared as var, is scoped to the nearest function

function doSomething(){
  for(let i=0;i<5;i++){
      console.log(i);
  }
  console.log(i);    //this will still be compiled to javascript and work fine, becuse let is going to replaced by var
 }
doSomething();


function doSomething2(){
  for(var i=0;i<5;i++){    //the above code gives an error, but this one gives no error
      console.log(i);      //this's not giving error since we are using var here
  }                        //var is scoped (hoisted) to the nearest function, so in this case it becomes up
  console.log(i);
}
doSomething2();
////////////////////////////////////////////

let message1:string = "abc";
let baba:boolean = message1.endsWith('c');
console.log(baba);

//////////////////////////////////////////////

function log(message){
  console.log(message);
}
var message = "Hello World";
log(message);

//we can also have tuples, tuples can have different data types
let tuple0: [string, number];
tuple0 = ["hello", 10];  //this will work fine
//tuple0 = [10, "hello"];   //this will not work, it will give an error, since the order of data types are wrong
tuple0[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(tuple0[5].toString()); // OK, 'string' and 'number' both have 'toString'
//tuple0[6] = true; // Error, 'boolean' isn't 'string | number'

let strArr: string[];
strArr = ["anil", "burak"];


enum Color {Red, Green, Blue}  //normally the indices start with 0
let c: Color = Color.Green;


enum Color2 {Red = 1, Green, Blue}
let colorName: string = Color2[2];
alert(colorName); // Displays 'Green' as it's value is 2 above

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let notSure1: any = 4;
notSure1.ifItExists(); // okay, ifItExists might exist at runtime
notSure1.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let list3: any[] = [1, true, "free"];
list3[1] = 100;



function warnUser(): void {
  alert("This is my warning message");
}


let unusable: void = undefined;  //we can only assign undefined or null to the variables of type void

//////////////////////////////////////


function f() {
  var a = 10;
  return function g() {
      var b = a + 1;
      return b;
  }
}
var fn = f();
fn(); // returns '11'


function f1() {
  var a = 1;

  a = 2;
  var b = g();   //here we assign b as 2
  a = 3;

  return b;

  function g() {
      return a;
  }
}

f1(); // returns '2'
//////////////////////////////////


function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
      var currentRow = matrix[i];
      for (let i = 0; i < currentRow.length; i++) {
          sum += currentRow[i];
      }
  }

  return sum;
}

//since we are using let, the above code is going to work properly

///////////////////////////////////

function fok(condition, x) {
  if (condition) {
      let x = 100;
      return x;
  }
  return x;
}
fok(false, 0); // returns '0'
fok(true, 0);  // returns '100'

////////////////////////////


function fa(shouldInitialize: boolean) {
  if (shouldInitialize) {
      var x = 10;
  }
  return x;
}
fa(true);  // returns '10'
fa(false); // returns 'undefined

//////////////////////////////
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number{ 
  return x + y; 
};


let myAdd2: (x: number, y: number) => number =
function(x: number, y: number): number { return x + y; };

////////////////////////////////////////////////////

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { 
  firstName: "Jane", 
  lastName: "User" 
};

document.body.innerHTML = greeter(user);

///////////////////////////////////////////////

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}   //the end of the class

interface Person2 {
  firstName: string;
  lastName: string;
}  //the end of the interface

function greeter2(person : Person2) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter2(user2);


///////////////////////////////////////////////


// TypeScript is object-oriented JavaScript
// TypeScript supports object-oriented programming
//features like classes, interfaces. etc...

//Number - All numeric values are represented by the number type, there aren't separate definitions for integers, floats or others.
//String - The text type, just like in vanilla JS strings can be surrounded by 'single quotes' or "double quotes".
//Boolean - true or false, using 0 and 1 will cause a compilation error.
//Any - A variable with this type can have it's value set to a string, number, or anything else.
//Arrays - Has two possible syntaxes: my_arr: number[]; or my_arr: Array<number>.
//Void - Used on function that don't return anything.


// Here we define our Food interface, its properties, and their types.
interface Food {
  name: string;
  calories: number;
}

// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
function speak(food: Food): void{
console.log("Our " + food.name + " has " + food.calories + " calories.");
}

// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
name: "ice cream", 
calories: 200
}

speak(ice_cream);


//////////////////////////////////////////

/home/abilsel/mono_repo/device/wearable_device_sw/sdk/types/wat.d.ts

class Menu {
  // Our properties:
  // By default they are public, but can also be private or protected.
  items: Array<string>;  // The items in the menu, an array of strings.    //or we could say item: string[]
  pages: number;         // How many pages will the menu be, a number.

  // A straightforward constructor. 
  constructor(item_list: Array<string>, total_pages: number) {
    // The this keyword is mandatory.
    this.items = item_list;    
    this.pages = total_pages;
  }

  // Methods
  list(): void {
    console.log("Our menu for today:");
    for(var i=0; i<this.items.length; i++) {
      console.log(this.items[i]);
    }
  }

} 

// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

// Call the list method.
sundayMenu.list();



//the below code should be in a different file

class HappyMeal extends Menu {
  // Properties are inherited

  // A new constructor has to be defined. (!!!!!!)
  constructor(item_list: Array<string>, total_pages: number) {
    // In this case we want the exact same constructor as the parent class (Menu), 
    // To automatically copy it we can call super() - a reference to the parent's constructor.
    super(item_list, total_pages);
  }

  // Just like the properties, methods are inherited from the parent.
  // However, we want to override the list() function so we redefine it.
  list(): void{
    console.log("Our special menu for children:");
    for(var i=0; i<this.items.length; i++) {
      console.log(this.items[i]);
    }

  }
}

// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);

// This time the log message will begin with the special introduction.
menu_for_children.list();



////////////////////////////////////////////////////////////////

//Generics are templates that allow the same function to accept arguments of various different types.
//Creating reusable components using generics is better than using the any data type, as generics preserve 
//the types of the variables that go in and out of them.


// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.

// Receives one argument of type T,
// Returns an array of type T.

function genericFunc<T>(argument: T): T[] {    
  var arrayOfT: T[] = [];    // Create empty array of type T.
  arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
  return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0])   // String

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0])   // number



/////////////////////////////////////

// the below code is in the file exporter.ts

var sayHi = function(): void {
    console.log("Hello!");
}

export = sayHi;



//the below code is in the file importer.ts

import sayHi = require('./exporter');
sayHi();


// ---------- VARIABLES ----------


var burger: string = 'hamburger',     // String 
calories: number = 300,           // Numeric
tasty: boolean = true;            // Boolean

 

// Variables must start with a letter, _, or $
// and then can contain numbers
 
// Declaring variables as statically typed is optional
// If you only provide a value the type is inferred
 
var myName: string = "Derek";

var myAge: number = 41;
 
// booleans can only be true or false
var canVote: boolean = true;
 
// A variable marked as any is a dynamic type
var anything: any = "dog";
anything = 2;
 
// You can print in the defined element
document.getElementById("tsStuff").innerHTML = "My Name is " + myName;
 
// A variable that didn't get a value assigned
// gets undefined
 
// null is a user assigned value saying that
// no value is assigned
 
// typeof returns the data type
document.write("myName is a " + typeof(myName) + "<br />");
document.write("canVote is a " + typeof(canVote) + "<br />");
document.write("anything is a " + typeof(anything) + "<br />");
 
// We can convert strings to numbers
var strToNum: number = parseInt("5");
document.write("strToNum is a " + typeof(strToNum) + "<br />");
 
// toString() converts anything into a string
var numToStr: number = 5;
document.write("numToStr is a " + typeof(numToStr.toString()) + "<br />");
 
// You define constants with const
const PI = 3.14159;
 
// ---------- INTERFACES ----------
// An interface can be used to describe complex
// types
 
interface SuperHero {
  realName: String;
  superName: String;
}
 
var superman: SuperHero = {
  realName: "Clark Kent",
  superName: "Superman"
}
 
// It is best to always separate with +
document.write(superman.realName + " is " + superman.superName + "<br />");
 
// More on interfaces below
 
// ---------- ARRAYS ----------
 
// Creates an array of strings that only excepts
// string values
var employees: string[] = ["Bob", "Sally", "Sam"];
 
// This would cause an error
// employees.push(5);
 
// Print all values in array
document.write(employees.toString() + "<br />");
 
// You can create arrays of interfaces
var superheroes: SuperHero[] = [];
 
superheroes.push({
  realName: 'Bruce Wayne',
  superName: 'Batman'
});
 
document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");
 
// ---------- MATH ----------
 
document.write("5 + 4 = " + (5+4) + "<br />");
document.write("5 - 4 = " + (5-4) + "<br />");
document.write("5 * 4 = " + 5*4 + "<br />");
document.write("5 / 4 = " + 5/4 + "<br />");
document.write("5 % 4 = " + 5%4 + "<br />");
 
// If you try to add anything to a string both
// become strings
// the below code will print out:
// 5 + String 2 =52
document.write("5 + String 2 = ", (5+'2') + "<br />");
 
var randNum: number = 1;
 
// If you increment after the current value is used
// and then it is incremented after
// The same is true with placing the -- after the
// variable
document.write("randNum++ = " + randNum++ + "<br />");  //1
document.write("++randNum = " + ++randNum + "<br />");  //3
document.write("randNum-- = " + randNum-- + "<br />");  //3 
document.write("--randNum = " + --randNum + "<br />");  //1         
 
// ---------- CONDITIONALS ----------
// If, Switch and the Ternary operator work
// the same in TypeScript as in JS
 
// Variables defined with let in blocks don't
// change the value of variables outside the block
 
let sampLet = 123;
if (true) {
    let sampLet = 456;
}
document.write("sampLet : " + sampLet + "<br />");   //this will print out 123
 
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write("sampVar : " + sampVar + "<br />"); //this will print out 456
 
// ---------- LOOPING ----------
// Looping works the same in TypeScript as in JS
// but for..of is added to get values in either
// an array or string
 
var randArray = [5,6,7,8];
 
// for..in provides the indexes
for(var val in randArray){
  document.write(val + "<br />");   //this will print out the indexes: 0 1 2 3  
}
 
// Convert a number array into a string array
var strArray = randArray.map(String)   
 
// for..of provides the values
for(var val of strArray){
  document.write(val + "<br />");  //this will print out 5 6 7 8
}
 
// ---------- FUNCTIONS ----------
 
// You can assign the variable types for the attributes
// You assign the return type after the attributes
// or if nothing is returned use void
var getSum = function(num1: number, num2: number): number{
  return num1 + num2;
}
 
var theSum1: number = getSum(5,2);
 
document.write("5 + 2 = " + theSum1 + "<br />");
 
// Assign a default value in the function declaration
// If an attribute isn't required follow the variable
// with a ?
var getDiff = function(num1: number, num2 = 2, num3?: number): number{
 
  // Check if a value was assigned with typeof
  if (typeof num3 !== 'undefined'){
    return num1 - num2 - num3;
  }
  return num1 - num2;
}
 
document.write("5 - 2 = " + getDiff(5) + "<br />");
document.write("5 - 2 - 3 = " + getDiff(5,2,3) + "<br />");
 
// You can receive an unknown number of values
// with a rest parameter ...nums
var sumAll = function(...nums: number[]): void{
 
  // We can use reduce with the array to add all
  // the values together one by one
  var sum = nums.reduce((a, b) => a + b, 0);  //reduce will cycle through the array
  document.write("Sum : " + sum + "<br />");
}
 
sumAll(1,2,3,4,5);
 
// Arrow functions don't include function in
// the definition
 
var addOne = (x)=>x+1;
 
document.write("1 + 1 = " + addOne(1) + "<br />");  //this will print out 2
 
// ---------- CLASSES ----------

// a class ub terms of OOP is a blueprint for creating objects.
 
// Classes describe real world objects by defining
// their attributes (fields) and capabilities
// (methods)
 
class Animal {
 
  // class fields
  public favFood: string;
 
  // static fields have values that are shared
  // by every object
  static numOfAnimals: number = 0;
 
  // If you define an attribute with private
  // the value is automatically assigned
  constructor(private name: string, private owner: string){
    Animal.numOfAnimals++;
  }
 
  // You can define methods as private but then
  // it can't be seen by subclasses, or accessed
  // by any code other then that within the class
  ownerInfo() {
    document.write(this.name + " is owned by " + this.owner + "<br />");
  }


  // a static method belongs to the class itself and a non-static (aka instance) method
  // belongs to each object that is generated from that class. 
 
  // Static methods are accessed using the class
  // name
  static howManyAnimals(): number{
    return Animal.numOfAnimals;
  }
 
  // Define getters and setters
 
  private _weight: number;
 
  get weight(): number{
    return this._weight;
  }
 
  set weight(weight: number){
    this._weight = weight;
  }
 
}   //this is the end of the class Animal
 
// Create an Animal object
var spot = new Animal("Spot", "Doug");
  
spot.ownerInfo();   // Spot is owned by Doug
 
spot.weight = 100
 
document.write("Spot's weight is " + spot.weight + "<br />");
 
// You can only access static methods by proceeding
// it with the class name
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
 
// You can inherit all methods and fields from
// another class with extends
// Additional methods and fields can be added
// or overwritten
 
class Dog extends Animal{
  constructor(name: string, owner: string){
    super(name, owner);     //we should do it
    Dog.numOfAnimals++;
  }
}
 
var grover = new Dog("Grover", "Jimmy");
 
// A call to howManyAnimals() is now 2
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");   //# of animals: 2
 
// Use instanceof to check for inheritance
document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");  //Is a Dog an Animal: true
 
// Check if a field exists for an object
document.write("Does grover have a name : " + ('name' in grover) + "<br />");    // Does grover have a name: true
 
// ---------- INTERFACES 2 ----------
// Interfaces define a contract in which if a
// class implements it is must create all
// functions defined in the interface
 
interface Vehicle {
  drive(): any;
}
 
class Car implements Vehicle{
  constructor(private wheels: number){}
 
  drive(): void{
    document.write("The car drives with " + this.wheels + " wheels<br />");
  }
}
 
class Bicycle implements Vehicle{
  constructor(private wheels: number){}
 
  drive(): void{
    document.write("The bicycle drives with " + this.wheels + " wheels<br />");
  }
}
 
var car = new Car(4);    //has 4 wheels
var bike = new Bicycle(2); // has 2 wheels
 
car.drive();   //The car drives with 4 wheels
bike.drive();  //The bicylce drives with 2 wheels
 
// ---------- GENERIC FUNCTIONS ----------
// We use generic functions when we want
// to be able to work with multiple data
// types in similar ways
 
// To create a generic function we place
// 1 or more data type markers in angled
// brackets after the function name. We
// then use those data type markers
// instead of actual data types.
 
function GetType<T>(val: T): string{    //any kind of data type (T) and it will return a string
  return typeof(val);                   //it returns the type of the value
}  
 
var aStr = "A String";
var aNum = 10;
 
document.write(GetType(aStr) + "<br />");    //string
document.write(GetType(aNum) + "<br />");    //number
 
// You define a generic function that
// excepts any class that implements
// an interface
 
function GetWheels<w extends Vehicle>(veh: w): number    //it will work for anything that has the Vehicle interface
{
  return veh.drive();  
}
 
GetWheels(car);
GetWheels(bike);
 
// You can also define generic classes that
// can work with multiple data types
 
class GenericNumber<T>{
 
  // An arrow function as described above
  add: (val1: T, val2: T) => T;
}
 
var aNumber = new GenericNumber<number>();
 
// Define how we want add to work with numbers
aNumber.add = function(x, y){return x + y;};
 
document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");
 
var aStrNum = new GenericNumber<string>();
 
// Define how we want add to work with strings
aStrNum.add = function(x, y){return String(Number(x) + Number(y));};
 
document.write("5 + 6 = " + aStrNum.add("5", "6") + "<br />");    // 5 + 4 = 9
 
// ---------- DESTRUCTORING ----------
// You can assign multiple values on one line
 
var randVals = {x: 1, y: 2, z: 3};
var {x, y, z} = randVals;
 
document.write(x + y + z + "<br />");   //6 
 
// Do the same with arrays
[x, y, z] = [z, y, x];
document.write("Switch : " + x + y + z + "<br />");  //321
 
// ---------- TEMPLATE STRINGS ----------
// Create multiline strings
var multStr = `I go on for
many lines<br />`;
document.write(multStr);    //I go on for many lines
 
// You can use string interpolation
document.write(`<b>${multStr}</b>`);  //I go on for many lines (but now this will be printed in bold)
 
// ---------- SPREAD OPERATOR ----------
// We can separate values in an array into
// attributs in a function
 
function theSum(x, y, z): void{
  document.write("Sum : " + (x + y + z) + "<br />");
}
 
var args = [4, 5, 6];
 
theSum(...args);
 
// ---------- ENUMS ----------
// Enums are number based in TS
 
enum Emotion {
  Happy = 1,   //it will start as 0 otherwise
  Sad,
  Angry
};
 
var myFeeling = Emotion.Happy;
 
// Same as
 
myFeeling = 1;

//////////////////////////////////

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
 
console.log(square.area); // 100

//////////////////////////////////
//interfaces: 
interface Todo{
  title: string;
  text: string;
}
function showTodo(todo: Todo){
  console.log(todo.title+ ": " + todo.text);
}
let myTodo = {title: "Trash", text: " Take out Trash"};
showTodo(myTodo);

//////////////////////////////////

interface UserInterface{
  name: string;
  mail: string;
  age: number;
  payInvonience();
}

class Adam implements UserInterface{
   name: string;
   mail: string;
   age: number; //we can access it only from inside the class

  constructor(name: string, mail: string, age: number){
    this.name = name;
    this.age = age;
    this.mail= mail;
  }
  payInvonience(){
    console.log(this.name + " paid invoince");
  }
}

class Ahmet extends Adam{
  tc: number;
  constructor(tc: number, name: string, mail: string, age: number){
    super(name,mail,age);
    this.tc = tc;
  }
  payInvonience(){
    super.payInvonience();
  }
}

//////////////////////////////////
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!

//The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. 
//Variables use const whereas properties use readonly.

//////////////////////////////////

interface SearchFunc {  //interface for function types
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

/* let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {  //this is valid as well
    let result = src.search(sub);
    return result > -1;
} */

//////////////////////////////////

interface ClockInterface {
  currentTime: Date;   //field
  setTime(d: Date);    //function
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}

//a class implements an interface, only the instance side of the class is checked. 

//////////////////////////////////

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

//////////////////////////////////

class Animal {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {   //override method
      console.log("Galloping...");
      super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
dog.bark();

//////////////////////////////////

class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
  constructor() { super("Rhino"); }
}

class Employee {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;    //they are compatible
animal = employee; // Error: 'Animal' and 'Employee' are not compatible


//////////////////////////////////

class Person {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }

  public getElevatorPitch() {
      return "Hello, my name is ${this.name} and I work in ${this.department}.";   //Notice that while we can’t use name from outside of Person, 
                                    //we can still use it from within an instance method of Employee because Employee derives from Person.
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error we can’t use name from outside of Person

//////////////////////////////////

class Person {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // Error: The 'Person' constructor is protected


//////////////////////////////////

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
      this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.

//////////////////////////////////

let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "anil bilsel";
if (employee.fullName) {
    console.log(employee.fullName);  //anil bilsel
}


//////////////////////////////////
//statics

class Grid {

  static origin = {  //we can only access it by using Grid.origin.x or Grid.origin.y
    x: 0, 
    y: 0
  };

  calculateDistanceFromOrigin(point: {
    x: number; 
    y: number;
  }) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor (public scale: number) {
   } //default constructor
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

//////////////////////////////////
interface Point{
  x: number;
  y: number;
}

let myPoint:Point = {
  x: 10,
  y: 10
};

let secondPoint:Point = {
  x: 10,
  y: 10
};

class Grid {
  static origin = {x: 0, y: 0};
  calculateDistanceFromOrigin(point: Point) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale


console.log(grid1.calculateDistanceFromOrigin(myPoint));
console.log(grid2.calculateDistanceFromOrigin(secondPoint));


//////////////////////////////////


abstract class Department {
  
      constructor(public name: string) {
      }
  
      printName(): void {
          console.log("Department name: " + this.name);
      }
  
      abstract printMeeting(): void; // must be implemented in derived classes
  }
  
  class AccountingDepartment extends Department {
  
      constructor() {
          super("Accounting and Auditing"); // constructors in derived classes must call super()
      }
  
      printMeeting(): void {
          console.log("The Accounting Department meets each Monday at 10am.");
      }
  
      generateReports(): void {
          console.log("Generating accounting reports...");
      }
  }
  
  let department: Department; // ok to create a reference to an abstract type
  department = new Department(); // error: cannot create an instance of an abstract class
  department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
  department.printName();
  department.printMeeting();
  department.generateReports(); // error: method doesn't exist on declared abstract type


  //////////////////////////////////
  class Greeter {
    
        static standardGreeting = "Hello, there";
    
        greeting: string;
    
        greet() {
            if (this.greeting) {  //if greeting is defined
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        }
    }
    
    let greeter1: Greeter;
    greeter1 = new Greeter();
    console.log(greeter1.greet());
    
    let greeterMaker: typeof Greeter = Greeter;
    greeterMaker.standardGreeting = "Hey there!";
    
    let greeter2: Greeter = new greeterMaker();
    console.log(greeter2.greet());

//In this example, greeter1 works similarly to before. We instantiate the Greeter class, and use this object.

//then, we create a new variable called greeterMaker. This variable will hold the class itself, or said another way its
//constructor function.Here we use typeof Greeter, that is “give me the type of the Greeter class itself” rather than the instance 
//type. Or, more precisely, “give me the type of the symbol called Greeter,” which is the type of the constructor function. This 
//type will contain all of the static members of Greeter along with the constructor that creates instances of the Greeter class. 
//We show this by using new on greeterMaker, creating new instances of Greeter and invoking them as before.

//////////////////////////////////

class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {  //this is completely valid
  z: number;
}

let point3d: Point3d = {   
  x: 1, 
  y: 2, 
  z: 3
};


//////////////////////////////////
//Functions
// Named function
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd = function(x, y) { 
  return x + y; 
};

//////////////////////////////////

////////////////////////////////////////////

//----------------- Classes------------------------//

//Classes inherit functionality and objects are built from these classes.

class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;   //it's a member access
  }
  greet() {
      return "Hello, " + this.greeting;
  }
 }
 //this class has three members:
 // 1-) a property called greeting
 // 2-) a constructor
 // 3-) a method greet
 
 let greeter = new Greeter("world");


 //-----------------Inheritance-----------------//

//Inheritance is an important pattern in Object Oriented Programming

class Animal {      //Animal is the base class (superclass)
  public move(distanceInMeters: number = 0) {  //default argument
      console.log(`Animal moved ${distanceInMeters}m`);    //use `...` !!!  ,these are template strings
  }
}

class Dog extends Animal {  //Dog is the derived class  (subclass)
  public bark() {
      console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();


//////////

//here is a more complex example:

class Animal {
  name: string;
  constructor(theName: string){ 
      this.name = theName; 
  }
  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);  //template strings
  }
}

class Snake extends Animal {
  constructor(name: string){ 
      super(name); 
  }
  move(distanceInMeters = 5) {     //here, we're overriding the method defined in the super class
      console.log("Slithering...");
      super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string){ 
      super(name);         //each constructor must call the super() method -- it will execute the constructor in base class
  }
  move(distanceInMeters = 45) {  //default value  
      console.log("Galloping...");
      super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");  //Animal is the appareant type, Horse is the actual type
                                                  //this will call the method in the Horse class
sam.move();
tom.move(34);

//in TypeScript. each member is public by default

//When a member is marked private, it cannot be accessed from outside of its containing class. For example:
class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

let myCat = new Animal("Cat").name; // Error: 'name' is private therefore we cannot access it outside of the class

///////////////

class Animal {  //Animal is the super class
  private name: string;
  constructor(theName: string){
      this.name = theName; 
  }
}

class Rhino extends Animal {  //Rhino is the subclass of the Animal
  constructor(){ 
      super("Rhino"); 
  }
}

class Employee {
  private name: string;
  constructor(theName: string){
      this.name = theName; 
  }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Error: 'Animal' and 'Employee' are not compatible

///////

//Protected
// The protected modifier acts much like the private modifier with the exception that members declared protected can 
// also be accessed by instances of deriving classes. 

class Person {
  protected name: string;
  constructor(name: string) { 
      this.name = name; 
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
      super(name);         //we can use name here, because Employee is derived from Person
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error, because name is a protected field


//////////

//A constructor may also be marked protected. This means that the class cannot be instantiated outside of its 
//containing class, but can be extended. For example:
class Person {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {  //but here, we can extend the protected constructor
      super(name);
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // Error: The 'Person' constructor is protected


/////////
//readonly modifier 
// You can make properties readonly by using the readonly keyword. Readonly properties must be initialized at their 
// declaration or in the constructor.
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;  //here, the readonly property is initialized in its declaration
  constructor (theName: string) {
      this.name = theName;    //here, the readonly property is initialized in the constructor
  }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.
//we could initialize a readonly property in the constructor of the 

//----we could also do it like the below way:
// class Octopus {
//     readonly numberOfLegs: number = 8;
//     constructor(readonly name: string) {
      
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// console.log(dad.name);  //Man with the 8 strong legs

////////////

//accessors
//TypeScript supports getters/setters as a way of intercepting accesses to a member of an object.
//getters and setters
//whenever possible, try to use getters and setters in order to have a more robust code

let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

/////////////////
//There are also static members of the classes.
//Static members are visible on the class itself rather than on the instances.

class Grid {
  static origin = {
    x: 0, 
    y: 0
  };
  calculateDistanceFromOrigin(point: {x: number; y: number;}) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// In the above example, we use static on the origin, as it’s a general value for all grids. Each instance accesses this value through 
// prepending the name of the class. Similarly to prepending this. in front of instance accesses, here we prepend Grid. in front of 
// static accesses.

//////////////////////////////////////////////////////////////

////-----------------Extra-Information-----------------////

const arr0 = [1,2,3];
const arr1 = arr0;

const arr2 = [1,2,3];

console.log(arr0 == arr1);  //true
console.log(arr0 ==  arr2); //false

console.log(arr0 === arr1); //true
console.log(arr0 === arr2); //false