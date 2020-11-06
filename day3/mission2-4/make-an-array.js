const o = require('./o.js');
const data = o.data;

const keysOfNum = []; // 정답 모은 배열
let remainder = [];

isNumber(data);
remainder.forEach(isNumber);

console.log(keysOfNum);

function isNumber(obj) {
  let numkey = [];

  for (key in obj) {
    if (typeof obj[key] === 'number') {
      numkey.push(key);
    } else {
      remainder.push(obj[key]);
    }
  }
  keysOfNum.push(...numkey);
  return remainder;
}
