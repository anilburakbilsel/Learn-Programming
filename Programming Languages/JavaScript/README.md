This is going to be folder for JavaScript. I am also learning JavaScript so I believe this is going to be a very good experience for me as well. Because I always believe that the best way to learn something is to teach it.

I will be learning JavaScript throught those sources:

https://developer.mozilla.org/en-US/docs/Web/JavaScript


Functions in JavaScript: 

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions

Here are two very good online platforms that you can run your JavaScript codes

http://jsbin.com/?html,output

https://thimble.mozilla.org/en-US/anonymous/55e3a250-ffdd-451c-bca2-7f74d4bb02c9



JavaScript: 
Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.

If you pass an object (i.e. a non-primitive value, such as Array or a user-defined object) as a parameter and the function changes the object's properties, that change is visible outside the function

```JavaScript
function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)
```


this is a function expression: 
```JavaScript
var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
console.log(factorial(3));
```

```JavaScript
function map(f, a) {
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
      return result;
}
var f = function(x) {
   return x * x * x; 
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);
```
The above code returns :  [0,1,8,125,1000]