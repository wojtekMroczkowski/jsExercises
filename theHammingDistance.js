/*
The Hamming distance between two binary integers is the number of bit positions that differs (read more about the Hamming distance on Wikipedia). For example:

    117 = 0 1 1 1 0 1 0 1
     17 = 0 0 0 1 0 0 0 1
      H = 0+1+1+0+0+1+0+0 = 3

You are given two positive numbers (N, M) in decimal form. You should calculate the Hamming distance between these two numbers in binary form.

Input: Two arguments as integers.

Output: The Hamming distance as an integer.

Example:

hammingDistance(117, 17) == 3
hammingDistance(1, 2) == 2
hammingDistance(16, 15) == 5

How it is used: This is a basis for Hamming code and other linear error-correcting programs. The Hamming distance is used in systematics as a measure of genetic distance. On a grid (ie: a chessboard,) the Hamming distance is the minimum number of moves it would take a rook to move from one cell to the other.

Precondition:
0 < n < 106
0 < m < 106
*/

//simple for loop version
function hammingDistance([a, b]){
    if (a.constructor === Array) [a, b] = a;
    a = a.toString(2);
    b = b.toString(2);  

    const fill = "0".repeat(Math.abs(a.length - b.length));

    a.length > b.length ? b = fill + b : a = fill + a;

    let c = 0;
    for(let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) c++;
    }

    return c;
}

//simple bitwise XOR caret operator
function hammingDistance([a, b]){
    if (a.constructor === Array) [a, b] = a;
    return ((a ^ b).toString(2).replace(/0/g,'').length);
}

//using reduce
function hammingDistance(n, m){
    if (n.constructor === Array) [n, m] = n;
    return (n ^ m).toString(2).split('').reduce((a, с) => a + +с, 0);
    
}

//using filter
let hammingDistance = (n, m) => (n^m).toString(2).split('').filter(x=>x>0).length

    // console.log(hammingDistance(117, 17), 3, "First example");
    // console.log(hammingDistance(1, 2), 2, "Second example");
    // console.log(hammingDistance(16, 15), 5, "Third example");
    console.log(hammingDistance([100000,50]), 7, "Fourth example");
