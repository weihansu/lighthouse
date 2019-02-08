var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


const toSortArray = students
.map(x => [x.name, x.age, x.id])
.sort(function(a, b) {
  return b[1] - a[1];
})
.sort(function(a, b) {
  if(a[0] < b[0]) { return -1; };
  if(a[0] > b[0]) { return 1; };
  return 0;
});


newObj = [];
toSortArray.forEach( function(element) {
  newObj.push({'id': element[2], 'name': element[0], 'age': element[1]});
  // console.log(element);
});

console.log(newObj)
