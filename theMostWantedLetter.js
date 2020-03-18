/*
You are given a text, which contains different english letters and punctuation symbols. You should find the most frequent letter in the text. The letter returned must be in lower case.
While checking for the most wanted letter, casing does not matter, so for the purpose of your search, "A" == "a". Make sure you do not count punctuation symbols, digits and whitespaces, only letters.

If you have two or more letters with the same frequency, then return the letter which comes first in the latin alphabet. For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".

Input: A text for analysis as a string.

Output: The most frequent letter in lower case as a string.

Example:

mostWanted("Hello World!") == "l"
mostWanted("How do you do?") == "o"
mostWanted("One") == "e"
mostWanted("Oops!") == "o"
mostWanted("AAaooo!!!!") == "a"
mostWanted("abe") == "a"

How it is used: For most decryption tasks you need to know the frequency of occurrence for various letters in a section of text. For example: we can easily crack a simple addition or substitution cipher if we know the frequency in which letters appear. This is interesting stuff for language experts!
*/

function mostWanted(data) {
    const arr = data.toLowerCase().replace(/[^a-z]+/gi, "").split('');
    const obj = {};
    arr.forEach(char => obj[char] ? obj[char] += 1 : obj[char] = 1);
    const max = Math.max(...Object.values(obj));
    const maxChars = [];
    for (const prop in obj) {
        if (obj[prop] === max) maxChars.push(prop);
    }
    return maxChars.sort()[0];
}

    console.log(mostWanted("Hello World!"), "l", "1st example");
    console.log(mostWanted("How do you do?"), "o", "2nd example");
    console.log(mostWanted("One"), "e", "3rd example");
    console.log(mostWanted("Oops!"), "o", "4th example");
    console.log(mostWanted("AAaooo!!!!"), "a", "Letters");
