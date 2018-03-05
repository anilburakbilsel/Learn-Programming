There are 3 types of variables in Java:
1-) Local Variable
2-) Static (or Class) Variable
3-) Instance Variable

Static (or Class) variables are associated with the class and common for all the instances of class. For example, if I create three objects of a class and access this static variable, it would be common for all, the changes made to the variable using one of the object would reflect when you access it through other objects. It is a variable which belongs to the class and not to object(instance). Static Variables are initialized only once, at the start of the execution. These variables will be initialized first, before the initialization of any instance variables. A single copy to be shared by al instances of the class. A static variable can be accessed directly by the class name and doesn't need any object. 

Static Variable is a variable which belongs to the class and intialized only once at the start of the execution. 

Static methods in Java is a method which belongs to the class and not to the object. A static method can access only static data (it cannot access instance variables). 