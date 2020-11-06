const o = require('./o.js');
const data = o.data;

const keysOfNum = [];
const dataArr = Object.values(data)
  .filter((value) => typeof value === 'object')
  .forEach(getNumKey);

console.log(keysOfNum);

function getNumKey(obj) {
  let numkey = [];
  for (key in obj) {
    if (typeof obj[key] === 'number') {
      numkey.push(key);
    } else {
      continue;
    }
  }
  keysOfNum.push(...numkey);
}
