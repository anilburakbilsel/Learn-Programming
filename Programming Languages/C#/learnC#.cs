//csc helloworld.cs 
//helloworld

// A C# program consists of the following parts −
//          Namespace declaration
//          A class
//          Class methods
//          Class attributes
//          A Main method
//          Statements and Expressions

using System;  //this includes the System namespace in the program
//The HelloWorldApplication namespace contains the class HelloWorld
namespace HelloWorldApplication {  //namespace declaration, a namespace is a collection of classes
//The HelloWorldApplication namespace contains the class HelloWorld
   class HelloWorld {
      static void Main(string[] args) {  //the entry point of the application
         /* my first program in C# */
         Console.WriteLine("Hello World");   //WriteLine is a method of the Console class defined in the System namespace
         Console.ReadKey();
      }
   }
}
//Unlike Java, program file name could be different from the class name.