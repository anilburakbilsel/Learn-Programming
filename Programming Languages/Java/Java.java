//if the file name and the class name do not match, then the program will not compile. 

//public static void main(String args[]) − Java program processing starts from the main() method which is a mandatory part of every Java program.

//Identifiers: 
//Names used for classes, variables, and methods are called identifiers. 

//Java Enumaration: 
class FreshJuice {
    enum FreshJuiceSize{
        SMALL, MEDIUM, LARGE 
        }
    FreshJuiceSize size;
 }
 
 public class FreshJuiceTest {
    public static void main(String args[]) {
       FreshJuice juice = new FreshJuice();
       juice.size = FreshJuice.FreshJuiceSize.MEDIUM ;
       System.out.println("Size: " + juice.size);    //Size: MEDIUM
    }
 }
 