//if the file name and the class name do not match, then the program will not compile. 

//public static void main(String args[]) − Java program processing starts from the main() method which is a mandatory part of every Java program.

//Identifiers: 
//Names used for classes, variables, and methods are called identifiers. 

//Java Enumaration: 
class FreshJuice {
    enum FreshJuiceSize {
        SMALL, MEDIUM, LARGE
    }

    FreshJuiceSize size;
}

public class FreshJuiceTest {
    public static void main(String args[]) {
        FreshJuice juice = new FreshJuice();
        juice.size = FreshJuice.FreshJuiceSize.MEDIUM;
        System.out.println("Size: " + juice.size); //Size: MEDIUM
    }
}

public class Dog {
    String breed;
    int age;
    // Every class has a constructor. If we do not explicitly write a constructor for a class, the Java compiler builds a default constructor for that class.
    String color;

    public Dog() {

    }

    void barking() {
    }

    void hungry() {
    }

    void sleeping() {
    }
}

// Each time a new object is created, at least one constructor will be invoked. The main rule of constructors is that they should have the 
//same name as the class. A class can have more than one constructor.

// Instance Variables: instance variables are variables within a class but outside any method. these variables are initialized when the class is instantiated.
//                     instance variables can be accessed from inside any method, constructor, or blocks of that particular class. 

// Class Variables:    class variables are variables declared within a class, outside any method, with the static keyword. 

public class Puppy {
    public Puppy() {
    }

    public Puppy(String name) {
        // This constructor has one parameter, name.
    }
}

// A class provides the blueprints for objects. So basically, an object is created from a class. 
// In Java, the new keyword is used to create new objects.

public class Puppy {
    public Puppy(String name) {
        // This constructor has one parameter, name.
        System.out.println("Passed Name is :" + name);
    }

    public static void main(String[] args) {
        // Following statement would create an object myPuppy
        Puppy myPuppy = new Puppy("tommy");
    }
}

public class Puppy {
    int puppyAge;

    public Puppy(String name) {
        // This constructor has one parameter, name.
        System.out.println("Name chosen is :" + name);
    }

    public void setAge(int age) {
        puppyAge = age;
    }

    public int getAge() {
        System.out.println("Puppy's age is :" + puppyAge);
        return puppyAge;
    }

    public static void main(String[] args) {
        /* Object creation */
        Puppy myPuppy = new Puppy("tommy");

        /* Call class method to set puppy's age */
        myPuppy.setAge(2);

        /* Call another class method to get puppy's age */
        myPuppy.getAge();

        /* You can access instance variable as follows as well */
        System.out.println("Variable Value :" + myPuppy.puppyAge);
    }
}

// There can be only one public class per source file.