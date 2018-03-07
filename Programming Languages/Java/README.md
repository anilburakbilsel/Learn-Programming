There are 3 types of variables in Java:
1-) Local Variable
2-) Static (or Class) Variable
3-) Instance Variable

Static (or Class) variables are associated with the class and common for all the instances of class. For example, if I create three objects of a class and access this static variable, it would be common for all, the changes made to the variable using one of the object would reflect when you access it through other objects. It is a variable which belongs to the class and not to object(instance). Static Variables are initialized only once, at the start of the execution. These variables will be initialized first, before the initialization of any instance variables. A single copy to be shared by al instances of the class. A static variable can be accessed directly by the class name and doesn't need any object. 

Static Variable is a variable which belongs to the class and intialized only once at the start of the execution. 

Static methods in Java is a method which belongs to the class and not to the object. A static method can access only static data (it cannot access instance variables). A static method belongs to the class, and you do not have to create an instance of the class to access the static method. A static method cam call only other static methods; it cannot call a non-static method. 


Instance Variables: Each instance (objects) of class has its own copy of instance variable. Unlike static variable, instance variables have their own seperate copy of instance variable. 

Local Variable: These variables are declared inside the method of the class. Their scope is limited to the method which means that we cannot change their values and access them outside of the method. 

/////////////////

Data Types in Java:

Data Type defines the values that a variable can take, for example if a variable has int data type, it can only take integer values. In Java, we have two categories of data type: 1-) Primitive Data Types 2-) Non-primitive Data Types. Arrays and Strings are non-primitive data types. 

Non-primitive data types also sometimes called as Reference/Object Data Type

Java is a statically typed language; a language is statically typed, if the data type of a variable is known at compile time. This means that we must specify the type of the variable (declare the variable) before we can use it.

In Java, we have 8 primitive data types:
boolean
char
byte
short
int
long
float
double

Java developers include these data types to maintain the portability of Java as the size of these primitive data types do not change from one operating system to another.

byte, short, int and long data types are used for storing whole numbers.

float and double are used for fractional numbers.

char is used for storing characters(letters).

boolean data type is used for variables that holds either true or false.

In Java, we have primitive data types for efficiency. Variables of primitive types contain the value directly; variables of non-primitive types are references, referring to an object stored somewhere else in memory.


byte: this can hold whole numbers between -128 and 127 (2^7). Default size is 1 byte.

short: its range is -32768 to 32767. Default size is 2 byte.

int: its range is -2147483648 to 2147483647. Default size is 4 bytes. 

long: its range is -9223372036854775808 to 9223372036854775807. Default size is 8 bytes.

double: sufficient for holding 15 decimal digits. Default size is 8 bytes.     .d

float: sufficient for holding 6 to 7 decimal points. Default size is 4 bytes.  .f

char: holds characters. Size is 2 bytes.

```Java
double num1 = 22.3;
float num2 = 22.4f;   // here 22.4f is a literal and num2 is a variable
// Always suffix float value with the "f" else compiler will consider it as double

char ch = 'Z';
String str = "anil burak"
```

Variables are nothing but reserved  memory locations to store values. This means that when we create a variable we reserve some space in the memory. 

Based on the data type of a variable, the operating system allocates memory and decides what can be stored in that reserved memory. Therefore, by assigning different data types to variables, we can store integers, decimals, or characters in these variables. 

Data Types:
1-) Primitive Data Types
2-) Reference/Object Data Types


Java Variabkes are either "primitive types" or "reference types". 

The primitive types are the boolean type and the numeric types. The reference types are class types, interface types, and array types. There is also a special null type. An object is a dynamically created instance of a class type or a dynamically created array. The values of a reference type are references to objects. All objects, including arrays, support the methods of class Object. String literals are represented by String objects.

The null tpye has no name, so it's imposible to declare a variable of the null type or to cast to the null type. The null reference is the only possible value of an expression of null type.

C++ references are similar to Reference Datatypes in Java (though there are important differences).
[a_link][https://softwareengineering.stackexchange.com/questions/141834/how-is-a-java-reference-different-from-a-c-pointer]

```Java
Integer ref = new Integer(7); 
ref = null;
```
On the first line an object is created on the heap and ref refers to it. On the second line ref is changed to refer to null. There are no more references to the object on the heap so it will have become eligible for garbage collection, but until such time as the garbage collector does so it will actually still be there.



Reference Datatypes in Java:

A reference tpye is a data type that refers to an object in memory. A pointer tpye on the other hand
refers to a memory address. Reference types can be thought of as pointers that are implicitly dereferenced. The objects being referred to are dynamically allocated on the heap whereas value types (primitive datatypes) are allocated automatically on the stack.

Reference variables are created using defined constructors of the classes. They're used to access objects. These variables are declared to be of a specific type. Class objects and various type of array variables come under reference datatype. Default value of any reference variable is null. A reference variable can be used to refer any object of the declared type or any compatible type. 
```Java
Animal anAnimal = new Animal("Lion");
```

Pointers: 

Dereferencing a pointer means getting the value that is stored in the memory location pointed by the pointer. The operator * is used to do this, and is called the dereferencing operator. 

```C++
int a = 10;
int *ptr = &a;
printf("%d", *ptr); // With *ptr I'm dereferencing the pointer. 
                    // Which means, I am asking the value pointed at by the pointer.
                    // ptr is pointing to the location in memory of the variable a.
                    // In a's location, we have 10. So, dereferencing gives this value.

// Since we have indirect control over a's location, we can modify its content using the pointer. This is an indirect way to access a.

 *ptr = 20;         // Now a's content is no longer 10, and has been modified to 20.
 ```

A pointer points to a memory addres. 

& is the reference operator -- it gives us a reference (pointer) to some object in the memory.

* is the dereference operator -- it takes a reference (pointer) and gives us back the referred to object in the memory.

Value Types are same as Primitive Datatypes:

    - In C++, booleans, characters, integer numbers, floating-point numbers, arrays, classes—including strings, lists, dictionaries, sets, stacks, queues—and enumerations are value types, while references and pointers are reference types.
    
    - In C#, structures (struct keyword)—including booleans, characters, integer numbers, floating-point numbers and fixed-point numbers, lists, dictionaries, sets, stacks, queues, optionals—and enumerations are value types, while classes (class keyword)—including immutable strings, arrays, tuples, lists, dictionaries, sets, stacks, queues—, interfaces and pointers are reference types.

    - In Java, booleans, characters, integer numbers and floating-point numbers, are value types, while arrays, classes—including immutable strings, lists, dictionaries, sets, stacks, queues, enumerations—and interfaces are reference types.



/////////////////////////


A variable provides us with named storage that our programs can manipulate. Each variable in Java has a specific type, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.
There're 3 kinds of variables in Java: Local Variables, Instance Variables, Class/Static Variables. 

Access modifiers cannot be used for local variables. Local variables are implemented at stack level internally. And there is no default value for local variables, so local variables should be declared and an initial value should be assigned them before the first use. Their scope is only limited to the function they'are defined in. 

Instance variables are declared in a class, but outside a method, constructor or any block. When a space is allocated for an object in the heap, a slot for each instance variable value is created. Instance variables are created when an object is created with the use of the keyword 'new' and destroyed when the object is destroyed. It's recommended to make these variables private. Instance variables have default values. For numbers, the default value is 0, for Booleans it is false, and for object references it is null. 

Class variables also known as static variables are declared with the static keyword in a class, but outside a method, constructor, or a block. There would be one copy of each class variable per class, regardless of how many objects are created from it. Their lifetime is the entire run of the program. This is in contrast to shorter-lived automatic variables (local variables), whose storage is stack allocated and deallocated on the call stack; and in contrast to objects (reference datatypes), whose storage is dynamically allocated abd deallocated in heap memory. Static variables are stored in the static memory. Static variables are created when the program starts and destroyed when the program stops. Static variables can be accessed by calling with the class name => ClassName.VariableName. When declaring class variables as public static final, then variable names (constants) are all in upper case. If the static variables aren't public and final, the naming syntax is the same as instance and local variables.

Java Access Control Modifiers:
Java provides a number of access modifiers to set access levels for classes, variables, methods and constructors. The four access levels are −
    Visible to the package, the default. No modifiers are needed.
    Visible to the class only (private).
    Visible to the world (public).
    Visible to the package and all subclasses (protected).

Java Non-Access Modifiers
Java provides a number of non-access modifiers to achieve many other functionality.
    The static modifier for creating class methods and variables.
    The final modifier for finalizing the implementations of classes, methods, and variables.
    The abstract modifier for creating abstract classes and methods.
    The synchronized and volatile modifiers, which are used for threads.


A variable or method declared without any access control modifier is available to any other class in the same package. The fields in an interface are implicitly public static final and methods in an interface are by default public.

Methods, variables, and constructors that are declared private can only be accessed within the declared class itself. Class and interfaces cannot be private. Variables that are declared private can be accessed outside the class, if public getter methods are present in the class. Using the private modifier is the main way that an object encapsulates itself and hides data from the outside world.
