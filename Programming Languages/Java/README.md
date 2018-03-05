There are 3 types of variables in Java:
1-) Local Variable
2-) Static (or Class) Variable
3-) Instance Variable

Static (or Class) variables are associated with the class and common for all the instances of class. For example, if I create three objects of a class and access this static variable, it would be common for all, the changes made to the variable using one of the object would reflect when you access it through other objects. It is a variable which belongs to the class and not to object(instance). Static Variables are initialized only once, at the start of the execution. These variables will be initialized first, before the initialization of any instance variables. A single copy to be shared by al instances of the class. A static variable can be accessed directly by the class name and doesn't need any object. 

Static Variable is a variable which belongs to the class and intialized only once at the start of the execution. 

Static methods in Java is a method which belongs to the class and not to the object. A static method can access only static data (it cannot access instance variables). A static method belongs to the class, and you do not have to create an instance of the class to access the static method. A static method cam call only other static methods; it cannot call a non-static method. 


Instance Variables: Each instance (objects) of class has its own copy of instance variable. Unlike static variable, instance variables have their own seperate copy of instance variable. 

Local Variable: These variables are declared inside the method of the class. Their scope is limited to the method which means that we cannot change their values and access them outside of the method. 