function getRandomInt(min, max) { // min 이상 max 미만의 정수
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

class Village {
  constructor(name) {
    this.name = name;
    this.postbox = this.hasPostBox();
    this.postBoxSize = this.postbox === false ? null : getRandomInt(0, 101);
  }
  
  hasPostBox() {
    // 일정 확률로 postbox 유무를 true/false 로 정해줌.
    // 랜덤 수 돌려서 8 이상이면 true.
    const randomInt = getRandomInt(0, 11);
    if(randomInt > 8) {
      return this.postbox = true; // 나중에 true이면 우체통 ui 넣어주기
    } else {
      return this.postbox = false;
    }
  }
}

class RandomVillage {
  // 랜덤으로 어떻게 짤건지 로직
  createVillage() {
    const randomInt = getRandomInt(0, 11);
    if(randomInt < 3) {
      console.log('이전 마을의 형제')
    } else if(randomInt >= 3 && randomInt < 8) {
      console.log('이전 마을의 자식')
    } else {
      console.log('새로운 마을 덩어리')
    }
  }
}

class View {
  constructor() {
    // RandomVillage 의 결과값을 가져온다 ?
  }
}

const map = document.querySelector('.map');
map.innerHTML = `<div class="village" id="a">A</div>`;
const prev = document.querySelector('#a');

const template = `<div class="village" id="${this.name}">${this.name}</div>`

const TOTAL_VILLAGE = getRandomInt(2, 27);
let villages =[];
for(let i = 0; i < TOTAL_VILLAGE; i++) {
  const village = new Village(String.fromCharCode(65 + i));
  villages.push(village);
}
console.log(villages);