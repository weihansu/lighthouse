var countdownGenerator = function (x) {
  var count = x;

  return function () {
    if (count < 0) {
      console.log('Rocket already gone, bub!');
    } else if (count == 0) {
      console.log('Blast Off!')
    } else {
      console.log(`T-minus ${count}...`)
    }
    count--;
    return count;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!