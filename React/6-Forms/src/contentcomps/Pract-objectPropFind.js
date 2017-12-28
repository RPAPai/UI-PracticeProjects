const obj={valueMissing: false, typeMismatch: true, patternMismatch: false, tooLong: false, tooShort: false};

console.log(obj);

console.log("Find poperty of an object based on a specific value (ex: identify true prop) ");

console.log("Keys:: ",Object.keys(obj),`\nValues::`,Object.values(obj));
console.log(   Object.values(obj).indexOf(true));
console.log(   obj[Object.values(obj).indexOf(true)]);
console.log(   Object.keys(obj)[Object.values(obj).indexOf(true)]);

console.log("appraoch 2 fails in all false condition  ");

console.log(Object.entries(obj).find(e=>e[1]?e[0]:null));
console.log(Object.entries(obj).find(e=>e[1]?e[0]:null)[0]);
console.log(Object.entries(obj).find(e=>e[1]?e[0]:null)[1]);
