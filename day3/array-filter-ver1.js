// 특수기호가 있는 아이디 제외
// 아이디에서 숫자를 제거

// for/while문을 사용한 버전

const peoples = ['crong!@#', 'honux5', 'sarah#', 'hea3d', 'zello', '5lucas'];

const filterId = () => {
  const checkSpecial = (array) => {
    const CHECK_SPECIAL = /[~!@#$%^&*()_+|<>?:{}]/;
    let notHaveSpecial = [];

    for (let people of array) {
      if (CHECK_SPECIAL.test(people) == true) {
        continue;
      } else {
        notHaveSpecial.push(people);
      }
    }
    return notHaveSpecial;
  };

  const removeNumber = (array) => {
    const CHECK_NUM = /[0-9]/;
    let result = [];

    for (let people of array) {
      if (CHECK_NUM.test(people) == false) {
        result.push(people);
      } else {
        result.push(people.replace(CHECK_NUM, ''));
      }
    }
    return result;
  };

  console.log('정답:');
  console.log(removeNumber(checkSpecial(peoples)));
};

filterId();
