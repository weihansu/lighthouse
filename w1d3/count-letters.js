function countLetters(str) {
  var obj = {};
  var splitStr = str.replace(/ /g, '').split('');

  splitStr.forEach( function(element) {
    if (!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element] ++;
    }
  });
  return obj;
}

console.log(countLetters('lighthouse in the house'));