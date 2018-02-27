## Interface and Abstract Class in Java

Here, I will be working in Java programming language, but these two concepts; Interface and Abstract Classes are almost same for all other object oriented programming languages.

Abstract Classes may contain non-final variables, however variables in intarface are final, public and static. 

## Interface

Like a class, an interface can have methods and variables, but the methods declared in interface are by default abstract (only method signature, no body).  
    
    Interfaces specify what a class must do and not how. It is the blueprint of the class.

    An Interface is about capabilities like a Player may be an interface and any class implementing Player must be able to (or must implement) move(). So it specifies a set of methods that the class has to implement.

    If a class implements an interface and does not provide method bodies for all functions specified in the interface, then class must be declared abstract.

    A Java library example is Comparator Interface. If a class implements this interface, then it can be used to sort a collection.

```Java
interface <interface_name>{
    // declare constant fields
    // declare methods that abstract by default.
}
```

To declare an interface, use interface keyword. It is used to provide total abstraction. That means all the methods in interface are declared with empty body and are public and all fields are public, static and final by default. A class that implement interface must implement all the methods declared in the interface. To implement interface use implements keyword.


Why do we use interface ?

    It is used to achieve total abstraction.
    Since java does not support multiple inheritance in case of class, but by using interface it can achieve multiple inheritance .
    It is also used to achieve loose coupling.
    Interfaces are used to implement abstraction. So the question arises why use interfaces when we have abstract classes?
    The reason is, abstract classes may contain non-final variables, whereas variables in interface are final, public and static.

```Java
// Java program to demonstrate working of 
// interface.
import java.io.*;
// A simple interface
interface in1{
    // public, static and final
    final int a = 10;
    // public and abstract 
    void display();
}
 
// A class that implements interface.
class testClass implements in1{
    // Implementing the capabilities of
    // interface.
    public void display(){
        System.out.println("Hello");
    }
    // Driver Code
    public static void main (String[] args){
        testClass t = new testClass();
        t.display();
        System.out.println(a);
    }
}
```

