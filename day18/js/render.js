class Village {
  constructor(name) {
    this.name = name;
    this.postbox = false,
    this.postBoxSize = this.getRandomInt(0, 101);
  }
  
  hasPostBox() {
    // 일정 확률로 postbox 유무를 true/false 로 정해줌.
    // 랜덤 수 돌려서 8 이상이면 true.
    const randomInt = this.getRandomInt(0, 11);
    if(randomInt > 8) {
      this.postbox = true;
    } else {
      this.postbox = false;
    }
  }
  
  getRandomInt(min, max) { // min 이상 max 미만의 정수
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}

const a = new Village('A', 1);
a.hasPostBox();
console.log(a);