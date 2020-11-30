function getRandomInt(min, max) { // min 이상 max 미만의 정수
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

class Village { // '마을 객체 하나' 클래스
  constructor(name) {
    this.name = name;
    this.postbox = this.hasPostBox();
    this.postBoxSize = this.postbox === false ? null : getRandomInt(0, 101);
    // this.size = size; // 추후 수정
    this.children = [];
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

class VillageTree { // 마을 객체 하나하나 받아서 'tree를 구성'하는 클래스
  constructor(villages) {
    this.villages = villages; // 배열로 들어온다. 참조된 상태.
    // 마을 name은 나중에 div에 id로 할당
  }
  renderTree() {
    let tree = [this.villages[0]]; // A마을을 우선 넣고 시작
    this.villages[0].type = 'group';
    let currentParent = this.villages[0];
    
    for(let i = 1; i < this.villages.length; i++) {
      let randomInt = getRandomInt(0, 11);
      if(randomInt > 8) {
        if(currentParent.type === 'group') { // 이전 마을이 group이어서 형제요소 === 새 마을 덩어리인 경우
          console.log(String.fromCharCode(65 + i), '새로운 마을 덩어리')
          tree.push(this.villages[i]);
          this.villages[i].type = 'group';
        } else {
          console.log(String.fromCharCode(65 + i), '이전 마을의 형제')
          currentParent.children.push(this.villages[i]);
        }
      } else if(randomInt > 3) {
        console.log(String.fromCharCode(65 + i), '이전 마을의 자식')
        this.villages[i - 1].children.push(this.villages[i]);
        currentParent = this.villages[i - 1];
      } else {
        console.log(String.fromCharCode(65 + i), '새로운 마을 덩어리')
        tree.push(this.villages[i]);
        currentParent = this.villages[i];
        this.villages[i].type = 'group';
      }
    }
    console.log('tree', tree);
  }
}

class View {
  constructor() {
    // VillageTree 의 결과값을 가져온다 ?
  }
}

const map = document.querySelector('.map');

const template = `<div class="village" id="${this.name}">${this.name}</div>`

const TOTAL_VILLAGE = getRandomInt(2, 27); // 몇 개의 마을인지 우선 정함
let villages =[]; // 여기에 tree 집어넣으면 될 듯..?
for(let i = 0; i < TOTAL_VILLAGE; i++) { // 지금은 마을 객체를 만들어서 넣었음
  const village = new Village(String.fromCharCode(65 + i));
  villages.push(village);
}
console.log(villages);

const villageTree = new VillageTree(villages);
villageTree.renderTree();


// const village = new village();
// const randomVillage = new randomVillage(village);
// class randomVillage {
//       constructor (village){
//                 this.village = village;
//                     }}