var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);
console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
console.log(chalk`{bold.rgb(10,100,200) Hello!}`);
console.log(chalk.bgKeyword('blue')('Some orange text'));