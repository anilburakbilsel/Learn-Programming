## Interface and Abstract Class in Java

Here, I will be working in Java programming language, but these two concepts; Interface and Abstract Classes are almost same for all other object oriented programming languages.

Abstract Classes may contain non-final variables, however variables in intarface are final, public and static. 

## Interface

Interface is used to achieve multiple inheritance.

Interface is used to achieve loose coupling. (We desire to have programs which have high cohesion and low coupling!)

Like a class, an interface can have methods and variables, but the methods declared in interface are by default abstract (only method signature, no body).  

- Interfaces specify what a class must do and not how. It is the blueprint of the class.

- An Interface is about capabilities like a Player may be an interface and any class implementing Player must be able to (or must implement) move(). So it specifies a set of methods that the class has to implement.

- If a class implements an interface and does not provide method bodies for all functions specified in the interface, then class must be declared abstract.

- A Java library example is Comparator Interface. If a class implements this interface, then it can be used to sort a collection.


```Java
interface <interface_name>{
    // declare constant fields
    // declare methods that abstract by default.
}
```


To declare an interface, use interface keyword. It is used to provide total abstraction. That means all the methods in interface are declared with empty body and are public and all fields are public, static and final by default. A class that implement interface must implement all the methods declared in the interface. To implement interface use implements keyword.


Why do we use interface ?

 - It is used to achieve total abstraction.

 - Since java does not support multiple inheritance in case of class, but by using interface it can achieve multiple inheritance .

- It is also used to achieve loose coupling.

- Interfaces are used to implement abstraction. So the question arises why use interfaces when we have abstract classes?
The reason is, abstract classes may contain non-final variables, whereas variables in interface are final, public and static.

```Java
// Java program to demonstrate working of interface.
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
    // Implementing the capabilities of interface.
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

## New Features of JDK 8

1-) Prior to JDK 8, interface could not define implementation. We can now add default implementation for interface methods. This default implementation has special use and does not affect the intention behind interfaces.

Suppose we need to add a new function in an existing interface. Obviously the old code will not work as the classes have not implemented those new functions. So with the help of default implementation, we will give a default body for the newly added functions. Then the old codes will still work.

```Java
// An example to show that interfaces can have methods from JDK 1.8 onwards
interface in1{
    final int a = 10;
    // DON'T FORGET TO PUT THE "DEFAULT" KEYWORD!!!!
    default void display(){   
        System.out.println("hello");
    }
}
 
// A class that implements interface.
class testClass implements in1{
    // Driver Code
    public static void main (String[] args){
        testClass t = new testClass();
        t.display();
    }
}
```




2-) Another feature that was added in JDK 8 is that we can now define static methods in interfaces which can be called independently without an object. Note: these methods are not inherited.

```Java
// An example to show that interfaces can have methods from JDK 1.8 onwards
interface in1{
    final int a = 10;
    static void display(){
        System.out.println("hello");
    }
}
 
// A class that implements interface.
class testClass implements in1{
    // Driver Code
    public static void main (String[] args){
        in1.display();
    }
}
// dont forget that this method is not inherited
```


Important points about interface or summary of article:

- We can’t create instance(interface can’t be instantiated) of interface but we can make reference of it that refers to the Object of its implementing class.

- A class can implement more than one interface.

- An interface can extends another interface (but only one interface).

- A class that implements interface must implements all the methods in interface.

- All the methods are public and abstract. And all the fields are public, static, and final.

- It is used to achieve multiple inheritance.

- It is used to achieve loose coupling.

- New features added in interfaces in JDK 9 


From Java 9 onwards, interfaces can contain following also: 
    Static methods
    Private methods
    Private Static methods




## Abstract Class

In C++, if a class has at least one pure virtual function, then the class becomes abstract. Unlike C++, in Java, a separate keyword abstract is used to make a class abstract.


```Java
// An example abstract class in Java
abstract class Shape {
    int color;
    // An abstract function (like a pure virtual function in C++)
    abstract void draw(); 
}
```


Like C++, in Java, an instance of an abstract class cannot be created, we can have references of abstract class type though.


```Java
abstract class Base {
    abstract void fun();
}
class Derived extends Base {
    void fun(){ 
        System.out.println("Derived fun() called"); 
    }
}
class Main {
    public static void main(String args[]) { 
        // Uncommenting the following line will cause compiler error as the line tries to create an instance of abstract class.
        // Base b = new Base();
        // We can have references of Base type.
        Base b = new Derived();
        b.fun(); 
    }
}
```


Like C++, an abstract class can contain constructors in Java. And a constructor of abstract class is called when an instance of a inherited class is created. For example, the following is a valid Java program:
```Java
// An abstract class with constructor
abstract class Base {
    Base(){ 
        System.out.println("Base Constructor Called"); 
    }
    abstract void fun();
}
class Derived extends Base {
    Derived() { 
        System.out.println("Derived Constructor Called"); 
        }
    void fun() { 
        System.out.println("Derived fun() called"); 
        }
}
class Main {
    public static void main(String args[]) { 
       Derived d = new Derived();
    }
}
// Output:
// Base Constructor Called
// Derived Constructor Called
```


In Java, we can have an abstract class without any abstract method. This allows us to create classes that cannot be instantiated, but can only be inherited.

```Java
// An abstract class without any abstract method
abstract class Base {   
    void fun() { 
        System.out.println("Base fun() called"); }
}
  
class Derived extends Base { }
  
class Main {
    public static void main(String args[]) { 
        Derived d = new Derived();
        d.fun();  // Base fun() called
    }
}
```

Abstract classes can also have final methods (methods that cannot be overridden).

