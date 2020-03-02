/*
You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence. It can be only one.

Input: non empty Array of strings.

Output: a string.

Example:

mostFrequent([
    'a', 'b', 'c', 
    'a', 'b',
    'a'
]) == 'a'
mostFrequent(['a', 'a', 'bi', 'bi', 'bi']) == 'bi'
*/

function mostFrequent(data) {
    // returns the most frequenly occuring string in the given array
    return data.sort((a,b) => data.filter(v => v===a).length - data.filter(v => v===b).length).pop();
}

 console.log(mostFrequent(['a', 'a', 'bi', 'bi', 'bi'])); // 'bi'