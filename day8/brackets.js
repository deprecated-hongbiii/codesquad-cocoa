const data = "[1,2,[3,4,[5,[6,[7]]]]]"
const dataArr = [...data];

const getDepth = (dataArr) => {
  const brackets = dataArr.filter(elem => elem.charCodeAt() === 91 || elem.charCodeAt() === 93);
  const numberOfOpenBrackets = (brackets.filter(elem => elem === '[')).length;
  const numberOfCloseBrackets = (brackets.filter(elem => elem === ']')).length;

  if (numberOfOpenBrackets !== numberOfCloseBrackets) {
    console.log('괄호 짝이 맞지 않습니다.')
    return
  }  
  // 짝이 맞으면 깊이를 구하기
  let depth = 1;
  for(let i = 1; i < brackets.length; i++){
    if(brackets[i - 1] === '[' && brackets[i] === '['){
      depth += 1;
    }
  }
  console.log(`깊이는 ${depth}입니다.`)
}

const getNumbersOfElements = (dataArr) => {
  const numbers = dataArr.filter(elem => elem.charCodeAt() !== 44) // 쉼표 다 빼기
  .filter(elem => elem.charCodeAt() >= 48 && elem.charCodeAt() <= 57); // 숫자만 골라내기
  console.log(`총 ${numbers.length}개의 원소가 포함되어 있습니다.`);
}

const run = (dataArr) => {
  getDepth(dataArr);
  getNumbersOfElements(dataArr);
}

run(dataArr);