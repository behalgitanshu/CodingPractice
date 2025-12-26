export default function typesOfFunctions(){
  // Funtion Statements aka Function Declarations
  greet();
  function greet() {
    console.log("Hello from Function Statement!");
  }

  // Function Expressions
  const farewell = function() {
    console.log("Goodbye from Function Expression!");
  };
  farewell();

  // Anonymous Function Expressions
  (function() {
    console.log("Hello from Anonymous Function Expression!");
  })();

  // Named Function Expressions
  const namedFunc = function named() {
    console.log("Hello from Named Function Expression!");
  };
  namedFunc();

  // Difference between Parameters and Arguments
  function add(a, b) { // a and b are parameters
    return a + b;
  }
  const sum = add(5, 10); // 5 and 10 are arguments
  console.log("Sum:", sum);

  // First-Class Functions
  function operate(operation, x, y) {
    return operation(x, y);
  }

  const multiply = function(x, y) {
    return x * y;
  };

  const sumResult = operate(add, 5, 10);
  console.log("Sum Result using First-Class Function:", sumResult);

  const result = operate(multiply, 4, 5);
  console.log("Multiplication Result:", result);

  // Arrow Functions
  const square = (n) => n * n;
  console.log("Square of 6:", square(6));

  // IIFE (Immediately Invoked Function Expression)
  (function(message) {
    console.log("IIFE says:", message);
  })("Hello from IIFE!");
}