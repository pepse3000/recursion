function fibs(n) {
  let result = [0, 1];

  if (n <= 1) {
    return result;
  }

  for (let i = 1; i < n; i++) {
    result.push(result[i] + result[i - 1]);
  }

  return result;
}

function fibsRec(n) {
  if (n == 1) return [0, 1];

  let arr = fibsRec(n - 1);
  return [...arr, arr[n - 2] + arr[n - 1]]
}

console.log(fibsRec(5));