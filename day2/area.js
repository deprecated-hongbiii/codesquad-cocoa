let executionSequence = [];

const saveExecutionSequence = (data) => {
  executionSequence.push(data);
};

const printExecutionSequence = () => {
  const result = executionSequence.join(', ');
  console.log(`[함수 실행 로그]: ${result}`);
};

class Quadrangle {
  constructor(shape, height, width1, width2 = width1) {
    this.shape = shape;
    this.height = height;
    this.width1 = width1;
    this.width2 = width2;
  }

  getArea() {
    const width = (this.width1 + this.width2) / 2;
    console.log(`${this.shape}의 넓이는 ${width * this.height}`);
    saveExecutionSequence(`${this.shape}`);
  }
}

const PI = 3.14;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    console.log(`원의 넓이는 ${Math.pow(this.radius, 2) * PI}`);
    saveExecutionSequence('원');
  }

  getAreaSum(n) {
    let sum = 0;
    for (let i = 1; i <= this.radius; i++) {
      const area = Math.pow(i, 2) * PI;
      sum = sum + area;
    }
    console.log(`반지름이 1부터 n까지 n개의 원의 넓이 합은 ${sum}`);
    saveExecutionSequence('원의 넓이의 합');
  }
}

const circle = new Circle(3);
const rectangle = new Quadrangle('사각형', 5, 6);
const trapezoid = new Quadrangle('사다리꼴', 4, 8, 6);

function init() {
  rectangle.getArea();
  trapezoid.getArea();
  circle.getArea();
  circle.getAreaSum(3);
  printExecutionSequence();
}

init();
