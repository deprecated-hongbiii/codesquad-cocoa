const myReduce = (arr, callback, initialValue) => {
  let accu = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accu = callback(accu, arr[i]);
  }
  return accu;
};

// const result = myReduce(arr, (next,prev) => {next + prev}, []);
const result = myReduce([1, 2, 3, 4], (prev, next) => prev + next, 5);
console.log(result);
