/*
You are given a string and two markers (the initial and final). You have to find a substring enclosed between these two markers. But there are a few important conditions:

The initial and final markers are always different.
If there is no initial marker, then the first character should be considered the beginning of a string.
If there is no final marker, then the last character should be considered the ending of a string.
If the initial and final markers are missing then simply return the whole string.
If the final marker comes before the initial marker, then return an empty string.
Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.

Output: A string.

Example:

betweenMarkers('What is >apple<', '>', '<') == 'apple'
betweenMarkers('No[/b] hi', '[b]', '[/b]') == 'No'

How it is used: for parsing texts

Precondition: can't be more than one final marker and can't be more than one initial
*/

//if statements mess
function betweenMarkers(text, begin, end) {
    if (!begin && !end) return text;
    if (text.indexOf(end) === text.indexOf(begin)) return text;
    if (text.indexOf(end) > text.indexOf(begin) && text.indexOf(begin) > -1) return text.split(begin)[1].split(end)[0];
    if (text.indexOf(end) > -1 && text.indexOf(end) < text.indexOf(begin)) return '';
    if (text.indexOf(end) > -1) return text.split(end)[0];
    if (text.indexOf(begin) > -1) return text.split(begin)[1];
  }

  //simplified
  function betweenMarkers(text, begin, end)
  {
      const completed = (
          (text.includes(begin)? '' : begin) +
          text +
          (text.includes(end)? '' : end)
      );
  
      return completed.slice(
          completed.indexOf(begin) + begin.length,
          completed.indexOf(end)
      );
  }

  //more simplified
  function betweenMarkers(txt, beg, end) {
    var b = txt.includes(beg) ? txt.indexOf(beg) + beg.length : 0;
    var e = txt.includes(end) ? txt.indexOf(end) : txt.length;
    return txt.slice(b, e);
}


    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    console.log(betweenMarkers("<head><title>My new site</title></head>","<title>", "</title>"), 'My new site')
    console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
    console.log(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
    console.log(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
    console.log(betweenMarkers('No <hi> one', '>', '<'), '')