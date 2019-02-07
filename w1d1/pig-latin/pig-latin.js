var args = process.argv;

function pigLatin(words) {
  var result = [];

  for (let i = 2; i < words.length; i++) {
    var word = words[i];
    var first = word[0];
    var translate = '';
    for (let i = 1; i < word.length; i++) {
      translate += word[i];
    }
    translate += first + 'ay';
    result.push(translate);

  }
  console.log(result.join(' '));
}

pigLatin(args);