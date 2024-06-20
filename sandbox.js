// create empty object (this time with 'new' instead of '{}')
const obj = new Object();

// assign, modify and access property using the '.'-syntax
obj.count = 0;
obj.count += 7;
let object1 = obj;
let count = obj.count; // is 7
object1.count += 1;

console.log(object1.count);
console.log(obj.count);