const height: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7];
function maxArea(array: number[]): number {
  let target: number = 0;
  let run: number = 0;
  let arrayLength: number = array.length - 1;
  while (run < arrayLength) {
    target = Math.max(
      target,
      Math.min(array[run], array[arrayLength]) * (arrayLength - run)
    );
    if (array[run] < array[arrayLength]) {
      run++;
    } else {
      arrayLength--;
    }
  }
  return target;
};
console.log(maxArea(height));