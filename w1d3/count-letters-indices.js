function countLetters(str) {
    var obj = {};
    var splitStr = str.split('');

    splitStr.forEach(function (element, index) {
        if (element !== ' ') {
            if (!obj[element]) {
                obj[element] = [index];
            } else {
                obj[element].push(index);
            }
        }
    });
    return obj;
}

console.log(countLetters('lighthouse in the house'));