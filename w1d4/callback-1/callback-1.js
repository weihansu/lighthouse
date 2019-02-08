// The second argument/parameter is expected to be a function
function findWaldo(arr, name, found) {
  arr.forEach( function(item, index) {
    if (item === name) {
      found(item,index);   // execute callback
    }
  })
}

function actionWhenFound(name, index) {
  console.log(`Found ${name} at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], 'Waldo',  actionWhenFound);
findWaldo(["Alice", "Bob", "Waldo", "Winston"], 'Bob',  actionWhenFound);