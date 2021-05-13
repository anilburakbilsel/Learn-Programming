public class JavaPassByValue {
    public static void main(String[] args) {
        int x = 5;
        change(x);
        // this will again print out 5, because it passes by value
        System.out.println(x);

        Test willNotWork = new Test(40);
        changeWillNotBeShown(willNotWork);
        System.out.println("there will be no change: ");
        System.out.println(willNotWork.x);


        Test myTest = new Test(10);
        visibleChange(myTest);
        System.out.println(myTest.x);
    }

    public static void change(int x) {
        // here, x is a copy of the real x variable defined in the main function
        x = 10;
    }

    public static void changeWillNotBeShown(Test t) {
        // We changed reference to refer some other location
        // now any changes made to reference are not reflected
        // back in main
        t = new Test(4);
        t.x = 10;
    }

    // This change() doesn't change the reference, it only
    // changes member of object referred by reference
    public static void visibleChange(Test t) {
        t.x = 3000;
    }

    private static class Test {
        int x;

        Test(int i) {
            x = i;
        }
    }

}