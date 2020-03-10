/*
o you remember the radix and Numeral systems from math class? Let's practice with it.

You are given a positive number as a string along with the radix for it. Your function should convert it into decimal form. The radix is less than 37 and greater than 1. The task uses digits and the letters A-Z for the strings.

Watch out for cases when the number cannot be converted. For example: "1A" cannot be converted with radix 9. For these cases your function should return -1.

Input: Two arguments. A number as string and a radix as an integer.

Output: The converted number as an integer.

Example:

numberRadix("AF", 16) == 175
numberRadix("101", 2) == 5
numberRadix("101", 5) == 26
numberRadix("Z", 36) == 35
numberRadix("AB", 10) == -1

How it is used: Here you will learn how to work with the various numeral systems and handle exceptions.

Precondition:
re.match("\A[A-Z0-9]\Z", str_number)
0 < len(str_number) ≤ 10
2 ≤ radix ≤ 36
*/

//regex complex
function numberRadix(str_number, radix){
    if (radix === 10) {
        return /^[0-9]*$/g.test(str_number) && parseInt(str_number, radix) ? parseInt(str_number, radix) : -1;
    } else {
        return /^[0-9a-fx-zqi]*$/gi.test(str_number) && parseInt(str_number, radix) ? parseInt(str_number, radix) : -1;
    }
}

//simplified conversion
function numberRadix(str_number, radix){
    const a = parseInt(str_number, radix), b = a.toString(radix);
    return b==str_number.toLowerCase() ? a : -1
}


    console.log(numberRadix("AF", 16), 175, "Hex");
    console.log(numberRadix("101", 2), 5, "Bin");
    console.log(numberRadix("101", 5), 26, "5 base");
    console.log(numberRadix("Z", 36), 35, "Z base");
    console.log(numberRadix("AB", 10), -1, "B > A > 10");
    console.log(numberRadix("ASD",15), -1, "wrong");
    console.log(numberRadix("IDDQD",30), 14943493, "30 base");
    console.log(numberRadix("5A6E",10), -1, "wrong");
