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
  }
}

const rectangle = new Quadrangle('사각형', 5, 6);
const trapezoid = new Quadrangle('사다리꼴', 4, 8, 6);
rectangle.getArea();
trapezoid.getArea();
