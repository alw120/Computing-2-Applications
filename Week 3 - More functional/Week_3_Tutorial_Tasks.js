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

// //Brady Numbers
// const brady = function (n) {
//     if (n === 0) {
//         return 2308;
//     }
//     if (n === 1) {
//         return 4261;
//     } else {
//         return brady (n - 1) + brady (n - 2);
//     }
// };

// console.log(brady(2308, 4261));

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
            return fibonacci_like(b0, b1)(n - 1) +
            fibonacci_like(b0, b1)(n - 2);
        }
    };
};

console.log(fibonacci_like(2308, 4261)(5));



// const fibonacci_2 = function (n, a, b) {
//     if (n === 0) {
//         return a;
//     } else {
//         return fibonacci_2 (n - 1, b, a + b);
//     }
// };

// console.log(fibonacci_2(2308, 4261)(8));

//Connect 4
// new_board = () => board;