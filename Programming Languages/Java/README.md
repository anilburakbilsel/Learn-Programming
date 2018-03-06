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
