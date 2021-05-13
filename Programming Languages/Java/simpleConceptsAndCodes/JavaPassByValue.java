
public class JavaPassByValue {
    public static void main(String[] args) {
        int x = 5;
        change(x);
        // this will again print out 5, because it passes by value
        System.out.println(x);
    }

    public static void change(int x) {
        // here, x is a copy of the real x variable defined in the main functions
        x = 10;
    }
}