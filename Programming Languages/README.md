# Some Important Points in Programming:

### 4 main concepts of Object Oriented Programming are:
    Abstraction
    Encapsulation
    Inheritance
    Polymorphism


### Pointer:
A pointer is a variable that contains an address of a variable.

A pointer references a location in memory, and obtaining the value stored at that location is known as dereferencing the pointer.

As an anology, a page number in a book's index could be considered a pointer to the corresponding page; dereferencing such a pointer would be done by flipping to the page with the given page number and reading th text found on the indexed page.

referencing and dereferencing


### Arrow Functions in JavaScript:
```JavaScript
let inc = (x) => x+1;

function Person(age){
    this.age = age;
    this.growOld = () => {
        this.age++;
    }
}

var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeOut(function(){
    console.log(person.age);
}, 2000);
```

in TypeScript:

```TypeScript
class Person{
    constructor(public age:number){}
    growOld = () => {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function(){
    console.log(person.age);
}, 2000);
```