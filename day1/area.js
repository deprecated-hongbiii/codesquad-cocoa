const PI = 3.14;

const getArea = (shape, width1, height, width2) => {
  switch (shape) {
    case 'circle':
      console.log(`${shape} area : ${PI * width1 * width1}`);
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
    area = radius * radius * PI;
    sum = sum + area;
  }

  console.log(`sum of circle's area : ${sum}`);
};

getArea('circle', 2);
getArea('rect', 4, 6);
getArea('trapezoid', 4, 6, 8);
sumCircles(3);
