/*
You are given two string with words separated by commas. Try to find what is common between these strings. The words are not repeated in the same string.

Your function should find all of the words that appear in both strings. The result must be represented as a string of words separated by commas in alphabetic order.

Input: Two arguments as strings.

Output: The common words as a string.

Examples:

commonWords("hello,world", "hello,earth") == "hello"
commonWords("one,two,three", "four,five,six") == ""
commonWords("one,two,three", "four,five,one,two,six,three") == "one,three,two"

How it is used: Here you can learn how to work with strings and sets. This knowledge can be useful for linguistic analysis.

Precondition:
Each string contains no more than 10 words.
All words separated by commas.
All words consist of lowercase latin letters.
*/

//forEach version:
function commonWords(first, second) {
    const res = [];
    const farr = first.split(',');
    const sarr = second.split(',');

    farr.forEach(e1 =>sarr.forEach(e2=> {
        e1===e2 ? res.push(e1) : '';
    }));
    return res.sort().toString();
}

//filter, includes version::
function commonWords(first, second) {
    const farr = first.split(',');
    const sarr = second.split(',');
    const res = farr.filter(e1 => sarr.includes(e1));
    return res.sort().toString();
}

console.log(commonWords("hello,world", "hello,earth"));
console.log(commonWords("one,two,three", "four,five,six"));
console.log(commonWords("one,two,three", "four,five,one,two,six,three"));
