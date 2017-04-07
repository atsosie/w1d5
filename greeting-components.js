// exports components of a personalized greeting

var args = process.argv.slice(2);

function getName(args) {
    if (args.length > 0) {
      userName = args;
      return userName;
    } else {
      return 0;
      };
};

module.exports = {
  greeting: "Hi, ",
  username: getName(args)
};