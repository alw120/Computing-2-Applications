// This is code using recursion for finding the factorial of an integer, n
const factorial = function (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(4));

// This is code using recursion to find the fibonacci series
const fibonacci = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

console.log(fibonacci(8));

// This code uses the recursion rule to find the Lucas numbers
const lucas = function (n) {
    if (n === 0) {
        return 2;
    }
    if (n === 1) {
        return 1;
    } else {
        return lucas(n - 1) + lucas(n - 2);
    }
};

console.log(lucas(10));

/* Write a function that takes the values of the base cases
and returns a Fibonacci-like function */
const fibonacci_like = function (b0, b1) {
    return function (n) {
        if (n === 0) {
            return b0;
        }
        if (n === 1) {
            return b1;
        } else {
            return fibonacci_like (n - 1) + fibonacci_like (n - 2);
        }
    }
};

console.log(fibonacci_like(0,1))