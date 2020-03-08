/*
You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions.

This is a simplified version of the Between Markers mission.

The initial and final markers are always different.
The initial and final markers are always 1 char size.
The initial and final markers always exist in a string and go one after another.
Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.

Output: A string.

Example:

betweenMarkers('What is >apple<', '>', '<') == 'apple'

How it is used: For text parsing.

Precondition: There can't be more than one final and one initial markers.
*/

function betweenMarkers(text, begin, end) {
    begin = begin.replace(/[<>*()?]/g, "\\$&");
    end = end.replace(/[<>*()?]/g, "\\$&");
    const exp = begin.replace('[') + '(.*)'+ escape(end); 
    return text.match(exp)[1];
}

   // console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    console.log(betweenMarkers('What is [apple]', '[', ']'), 'apple')
    console.log(betweenMarkers('What is ><', '>', '<'), '')
    console.log(betweenMarkers('>apple<', '>', '<'), 'apple')