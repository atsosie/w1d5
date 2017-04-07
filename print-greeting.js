// logs personalized greeting


var greetUser = require("./greeting-components");
var name = greetUser.username;

if (name === 0) {
  console.log("Who's there??");
  console.log("Usage: node myModule.js <username>");
} else {
  console.log(greetUser.greeting + name + "!");
}