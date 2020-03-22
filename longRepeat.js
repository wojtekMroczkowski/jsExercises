/*
There are four substring missions that were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be available with more opened islands on the map).

This mission is the first one of the series. Here you should find the length of the longest substring that consists of the same letter. For example, line "aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa". The last substring is the longest one which makes it an answer.

Input: String.

Output: Int.

Example:

longRepeat('sdsffffse') == 4
longRepeat('ddvvrwwwrggg') == 3
*/

function longRepeat(line) {
    return line ? line.match(/(.)\1*/g).sort((a, b) => b.length - a.length)[0].length : 0;    
}

    console.log(longRepeat('sdsffffse'), 4, "First")
    console.log(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log(longRepeat(''), 0, "Third")
