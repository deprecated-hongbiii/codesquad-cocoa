class Quadrangle {
  constructor(height, width1, width2 = width1) {
    this.height = height;
    this.width1 = width1;
    this.width2 = width2;
  }

  getArea() {
    const width = (this.width1 + this.width2) / 2;
    console.log(this);
    console.log(`${JSON.stringify(this)}의 넓이는 ${width * this.height}`);
  }
}

const rectangle = new Quadrangle(5, 6);
const trapezoid = new Quadrangle(4, 8, 6);
rectangle.getArea();
trapezoid.getArea();
