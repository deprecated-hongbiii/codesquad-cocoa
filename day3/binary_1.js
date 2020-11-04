let binaryArr = [];
let result = [];

const solution = (n, t, m) => {
  const TOTAL_NUM = Math.pow(2, t - 1) - 1;

  const changeToBinary = (TOTAL_NUM) => {
    for (let i = 0; i <= TOTAL_NUM; i++) {
      let binary = i.toString(2);
      binaryArr.push(binary);
    }
  };

  changeToBinary(TOTAL_NUM);

  for (let elem of binaryArr) {
    let num = elem.split('');
    result.push(...num);
  }
  console.log(result);
};

solution(2, 4, 2);
