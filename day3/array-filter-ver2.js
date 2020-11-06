// 특수기호가 있는 아이디 제외
// 아이디에서 숫자를 제거

// forEach,filter, map등의 고차함수를 사용한 버전

const peoples = ['crong!@#', 'honux5', 'sarah#', 'hea3d', 'zello', '5lucas'];

const CHECK_SPECIAL = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/;
const answer = [];

const notHaveSpecial = peoples
  .filter((people) => !CHECK_SPECIAL.test(people))
  .forEach(removeNumber);

function removeNumber(people) {
  const CHECK_NUMBER = /[0-9]/;
  if (CHECK_NUMBER.test(people) === false) {
    answer.push(people);
  } else {
    answer.push(people.replace(CHECK_NUMBER, ''));
  }
  return answer;
}

console.log(answer);
