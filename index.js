let arr = [1, 5, 7, 9, 14, 31, 4, 3];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let leftSide = arr.slice(0, middle);
  let rightSide = arr.slice(middle);

  let result = merge(mergeSort(leftSide), mergeSort(rightSide));
  return result;
}

function merge(left, right) {
  let returnArr = [];

  while (left.length != 0 && right.length != 0) {
    if (left[0] < right[0]) {
      returnArr.push(left.shift());
    } else {
      returnArr.push(right.shift());
    }
  }

  returnArr.push(...left, ...right)

  return returnArr;
}

console.log(mergeSort(arr));
