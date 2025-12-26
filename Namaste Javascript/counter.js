export default function CounterDemo() {
    function CounterExample() {
        let count = 0;

        function increment() {
            count++;
            console.log("Count after increment:", count);
        }

        function decrement() {
            count--;
            console.log("Count after decrement:", count);
        }

        return {
            increment,
            decrement
        };
    }
    
    var { increment, decrement } = CounterExample();
    increment(); // Count after increment: 1
    increment(); // Count after increment: 2
    decrement(); // Count after decrement: 1
}