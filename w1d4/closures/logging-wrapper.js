var wrapLog = function (callback, name) {
  //return area(callback[0],callback[1]);
  if (name == 'area') {
    return area;
  } else if (name == 'volume') {
    return volume;
  } else {
    return `Your ${name} is undefined`;
  }
};

var area = function (x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");



console.log('area(5, 3) => ' + logArea(5, 3)); // area(5, 3) => 15
console.log('area(3, 2) => ' + logArea(3, 2)); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};

var logVolume = wrapLog(volume, "volume");

console.log('volume(5, 3, 2) => ' + logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log('volume(3, 2, 4) => ' + logVolume(3, 2, 4)); // volume(3, 2, 4) => 24