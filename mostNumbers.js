/*
Let's work with numbers.

You are given an array of numbers (floats). You should find the difference between the maximum and minimum element. Your function should be able to handle an undefined amount of arguments. For an empty argument list, the function should return 0.

Floating-point numbers are represented in computer hardware as base 2 (binary) fractions. So we should check the result with ±0.001 precision.
Think about how to work with an arbitrary number of arguments.

Input: An arbitrary number of arguments as numbers (int, float).

Output: The difference between maximum and minimum as a number (int, float).

Precondition: 0 ≤ len(args) ≤ 20
all(-100 < x < 100 for x in args)
all(isinstance(x, (int, float)) for x in args)
*/

//clean and simple:
function mostNumbers(numbers){
    const max = Math.max(...arguments);
    const min = Math.min(...arguments);
    
    return arguments[0] ? max - min : 0;
}


//console.log(mostNumbers(1, 2, 3)); // 2 "3-1=2"
//console.log(mostNumbers(5, -5)); // 10, "5-(-5)=10");
//console.log(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5)*1000)); // 12400, "10.2-(-2.2)=12.4"
console.log(mostNumbers()); // 0, "Empty");