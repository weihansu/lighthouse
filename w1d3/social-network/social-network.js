const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// List everyone and for each of them, list the names of who they follow and who follows them

function getName(id) {
  var name = data[id].name;
  return name;
}
// console.log(getName('f06'));

function following(id) {
  var result = [];
  var follow = data[id].follows;

  follow.forEach( function(element) {
    var translate = getName(element);
    result.push(translate);
  });

  return result;
}

// console.log(following('f04'));

function follower(id) {
  var result = [];
  var keys = Object.keys(data);

  keys.forEach( function(keys) {
    var user = data[keys];
    var follow = user.follows;

    follow.forEach( function(who) {
      if (who == id) {
        result.push(user.name);
      }
    })

  })
  return result;
}

//var output = {};
var g = Object.keys(data);
g.forEach( function(element, index) {
  // output = {
  //   getName(element): {
  //     'following': following(element),
  //     'followers': follower(element)
  //   }
  // }
  console.log(getName(element));
  console.log(following(element));
  console.log(follower(element));
  console.log('____________')
});
// console.log(output);


// Identify who follows the most people
// Identify who has the most followers
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)