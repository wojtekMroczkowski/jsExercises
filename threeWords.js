/*
Let's teach the Robots to distinguish words and numbers.

You are given a string with words and numbers separated by whitespaces (one space). The words contains only letters. You should check if the string contains three words in succession. For example, the string "start 5 one two three 7 end" contains three words in succession.

Input: A string with words.

Output: The answer as a boolean.

Example:

Precondition: The input contains words and/or numbers. There are no mixed words (letters and digits combined).
0 < len(words) < 100

threeWords("Hello World hello") == True
threeWords("He is 123 man") == False
threeWords("1 2 3 4") == False
threeWords("bla bla bla bla") == True
threeWords("Hi") == False
*/

function threeWords(data) {
    const dArr = data.split(' ');
    let c = 0;    
    for (let i = 0; i < dArr.length; i++) {
       isNaN(dArr[i]) ? c++ : c = 0;
       if (c === 3) return true;
    }
    return false;
}


    console.log(threeWords("Hello World hello")); // true, "1st example"
    console.log(threeWords("He is 123 man")); // false, "2nd example"
    console.log(threeWords("1 2 3 4")); // false, "3rd example"
    console.log(threeWords("bla bla bla bla")); // true, "4th example"
    console.log(threeWords("Hi")); // false, "Letters"

