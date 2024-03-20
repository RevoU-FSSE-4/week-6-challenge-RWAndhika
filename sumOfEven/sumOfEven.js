function sumOfEvens(numbers) {
  // Your code here
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result += numbers[i];
    }
  }
  return result;
}

module.exports = sumOfEvens;
