/*
You are given a string where you have to find its first word.

When solving a task pay attention to the following points:

There can be dots and commas in a string.
A string can start with a letter or, for example, a dot or space.
A word can contain an apostrophe and it's a part of a word.
The whole text can be represented with one word and that's it.
Input: A string.

Output: A string.

Example:

firstWord("Hello world") == "Hello"
firstWord("greetings, friends") == "greetings"

How it is used: the first word is a command in a command line

Precondition: the text can contain a-z A-Z , . '
*/

function firstWord(a, b) {
    return a.match(/[a-zA-Z']+/)[0];
}


    // These "asserts" using for self-checking and not for auto-testing
    console.log(firstWord("Hello world"), "Hello")
    console.log(firstWord(" a word "), "a")
    console.log(firstWord("don't touch it"), "don't")
    console.log(firstWord("greetings, friends"), "greetings")
    console.log(firstWord("... and so on ..."), "and")
    console.log(firstWord("hi"), "hi")
