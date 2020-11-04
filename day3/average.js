// 각 학생의 평균점수(1)와 모든 학생의 최고점수의 평균점수(2)를 출력하라.

const grades = [
  [88, 76, 77],
  [33, 44, 44],
  [90, 100, 94],
  [30, 44, 98],
];

const average = (array) => {
  let sum = 0;
  array.forEach((score) => (sum += score));
  const result = sum / array.length;
  return result;
};

// 각 학생의 평균 점수
const averageOfEachStudent = grades.map((elem) => average(elem));
console.log(averageOfEachStudent);

// 학생 개개인의 최고 점수만 골라내기
