let binaryArr = [];
let result = [];
let gildongResult = [];

const solution = (n, t, m, p) => {
  const TOTAL_NUM = Math.pow(n, t - 1) - 1;

  const changeToBinary = (TOTAL_NUM) => {
    for (let i = 0; i <= TOTAL_NUM; i++) {
      let binary = i.toString(n);
      binaryArr.push(binary);
    }
  };

  changeToBinary(TOTAL_NUM);

  for (let elem of binaryArr) {
    let num = elem.split('');
    result.push(...num);
  }
  console.log('정답은 #############################');
  console.log(result);
  console.log('####################################');

  const gildong = (m, p) => {
    for (let i = 0; p + m * i - 1 < result.length; i++) {
      gildongResult.push(result[p + m * i - 1]);
    }
  };
  gildong(m, p);

  console.log('길동이가 말해야 할 숫자는 ############');
  console.log(gildongResult);
  console.log('####################################');
};

solution(2, 4, 2, 1);
