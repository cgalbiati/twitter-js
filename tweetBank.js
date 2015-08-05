var _ = require('underscore');

var data = [{name: "Timmy", text: "hi there", tweetId:'0'}];

var addCounter = function (name, text) {
  counter = 0;
  return function (name, text) {
    data.push({ name: name, text: text, tweetId: String(++counter)})
  }
}
var add = new addCounter;
  

var list = function () {
  return _.clone(data);
};

var find = function (properties) {
  return _.where(data, properties);
};

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

module.exports = { add: add, list: list, find: find };

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

// console.log(module.exports.find({text: "hi there"}));



//console.log(data);