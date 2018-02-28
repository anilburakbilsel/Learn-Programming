
// Java program to illustrate the concept of abstract class
import java.io.*;

// abstract class
abstract class Shape {
    // declare fields
    String objectName = " ";
    // Constructor
    // If you don’t have any common code between rectangle and circle like below then go with interface
    Shape(String name) {
        this.objectName = name;
    }

    // declare non-abstract methods it has default implementation
    public void moveTo(int x, int y) {
        System.out.println(this.objectName + " " + "has been moved to" + " x = " + x + " and y = " + y);
    }

    // abstract methods which will be implemented by its subclass(es)
    abstract public double area();

    abstract public void draw();
}
