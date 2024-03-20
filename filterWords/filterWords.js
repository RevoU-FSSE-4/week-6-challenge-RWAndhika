function filterWords(words) {
  // Your code here
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 3) {
      result.push(words[i]);
    }
  }
  return result;
}

module.exports = filterWords;
