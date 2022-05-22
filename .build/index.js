const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
function maxArea(array) {
  let target = 0, run = 0, arrayLength = array.length - 1;
  while (run < arrayLength) {
    target = Math.max(target, Math.min(array[run], array[arrayLength]) * (arrayLength - run));
    if (array[run] < array[arrayLength]) {
      run++;
    } else {
      arrayLength--;
    }
  }
  return target;
}
;
console.log(maxArea(height));
//# sourceMappingURL=index.js.map
