'use strict';

// mouseover 이벤트 발생
// -> 1초 머물렀는지 확인하는 함수 실행
// -> 그 함수의 결과값을 받아 노출 or 변화없음

const fruits = document.querySelector('.fruits');
function isOneSec() {
  function oneSec() {
    setTimeout(() => {
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
  button.addEventListener('mouseover', oneSec);
  button.addEventListener('mouseout', clearTimeout(oneSec));
}
isOneSec();

const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('mouseleave', () => {
  fruits.remove('li');
  console.log('마우스가 떠났다.')
})