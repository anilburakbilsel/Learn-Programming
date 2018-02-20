//static class members
class Grid {
    static origin = {
        x: 0,
        y: 0
    };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));



////----------------------------------------------------------////


abstract class Department {  //we cannot create an instance of this class
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
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();

////----------------------------------------------------------////

//here is a very important example
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());    //Hello, there

//here is the static side
let greeterMaker: typeof Greeter = Greeter;   //this variable holds the class itself
//Here we use typeof Greeter, that is “give me the type of the Greeter class itself” rather than the instance type.
//This type will contain all of the static members of Greeter along with the constructor that creates instances of the Greeter class.
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());  //Hey there!
//the type of greeterMaker is function (more precisely, it is the constructor function)


////----------------------------------------------------------////


//the following is an important example:
let myAdd: (x: number, y: number) => number =
  function (x: number, y: number): number { return x + y; };
//if the function does not return anything then we should put void.
console.log(myAdd(10, 20)); //30


let myAddAlternate: (x: number, y: number) => number =
  function (x, y) { return x + y; };

////----------------------------------------------------------////


function buildNameRest(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
  //Rest parameters are treated as a boundless number of optional parameters. When passing arguments for a rest parameter, you can use as many as you want; you can even pass none.
  let employeeName = buildNameRest("Joseph", "Samuel", "Lucas", "MacKinzie");
  //The compiler will build an array of the arguments passed in with the name given after the ellipsis (...), allowing you to use it in your function.
  
  let buildNameFun: (fname: string, ...rest: string[]) => string = buildNameRest;