var words = ["ground", "control", "to", "major", "tom"];

const wordLen = map(words, function(word) {
  return word.length;
});

const wordUpper = map(words, function(word) {
  return word.toUpperCase();
});

const wordSplit = map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(arr, callback) {
  result = [];
  for (let i = 0; i < arr.length; i ++) {
    result.push(callback(arr[i]));
  }
  return result;
};

console.log(wordLen);
console.log(wordUpper);
console.log(wordSplit);