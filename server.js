const { pluck } = require("@arte10/lib-test");

const array = [{ name: "c" }, { name: "d" }, { name: 11 }];

console.log(pluck(array, "name"));
