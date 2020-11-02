/* 
1. getArea 함수를 사용하면, 모든 넓이 값을 얻을 수 있다.

getArea('circle', 10); 파이 알 제곱
원, 반지름
>  원의 넓이 값출력

getArea('rect', 10,15);
사각형, 가로, 세로
>  사각형의 넓이값출력

getArea('trapezoid', 10,15,12);
사다리꼴, 가로1, 세로, 가로2
>  사다리꼴의 넓이값출력

getArea('circle', 1, n);
> 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이의 모든 합을 출력.

*/

const getArea = (shape, width1, height, width2) => {
  switch (shape) {
    case 'circle':
      console.log(`${shape} area : ${3.14 * width1 * width1}`);
      break;

    case 'rect':
      console.log(`${shape} area : ${width1 * height}`);
      break;

    case 'trapezoid':
      console.log(`${shape} area : ${((width1 + width2) * height) / 2}`);
      break;
  }
};

const sumCircles = (n) => {
  let sum = 0;
  let area = 0;

  for (let radius = 1; radius <= n; radius++) {
    area = radius * radius * 3.14;
    sum = sum + area;
  }

  console.log(`sum of circle's area : ${sum}`);
};

getArea('circle', 2);
getArea('rect', 4, 6);
getArea('trapezoid', 4, 6, 8);
sumCircles(3);
