'use strict';

const fruits = document.querySelector('.fruits');
let timer;

function oneSec() {
  timer = setTimeout(() => { // 변수에 넣어주기. 함수에 넣으면 못받아오는듯
    console.log('함수실행');
    fruits.innerHTML = `
    <li class="fruits__grape">grape</li>
    <li class="fruits__apple">apple</li>
    <li class="fruits__orange">orange</li>
    <li class="fruits__banana">banana</li>
    <li class="fruits__kiwi">kiwi</li>
    <li class="fruits__strawberry">strawberry</li>
    `
  }, 1000)
}
const button = document.querySelector('.toggle');
button.addEventListener('mouseenter', oneSec);
button.addEventListener('mouseout', () => clearTimeout(timer));

const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('mouseleave', () => {
  const li = document.querySelectorAll('li');
  li.forEach(v => v.remove())
  console.log('마우스가 떠났다.')
}) 