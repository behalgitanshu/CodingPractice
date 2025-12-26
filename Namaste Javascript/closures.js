export default function ClosureDemo() {
    function closureExample() {
        var a = 5, z = 15;
        function innerFunction(b) {

            function nestedFunction() {
                console.log(a, b, c);
            }
            let c = 10;
            return nestedFunction;
        }
        return innerFunction;
    }

    var myClosure = closureExample()("Hello World");
    myClosure(); // This will log "Hello World" and 10 to the console
}