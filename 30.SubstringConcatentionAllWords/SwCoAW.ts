function findSubstring(s: string, words: string[]): number[] {
  if (!s || !words.length) return [];

  const wordLength = words[0].length;
  const wordCount = words.length;
  const totalLength = wordLength * wordCount;
  const wordMap: { [key: string]: number } = {};
  for (const word of words) {
    wordMap[word] = (wordMap[word] || 0) + 1;
  }
  const result: number[] = [];

  for (let offset = 0; offset < wordLength; offset++) {
    let left = offset;
    let right = offset;
    let seen: { [key: string]: number } = {};
    let count = 0;

    while (right + wordLength <= s.length) {
      const word = s.substring(right, right + wordLength);
      right += wordLength;
      if (wordMap[word]) {
        seen[word] = (seen[word] || 0) + 1;
        count++;
        while (seen[word] > wordMap[word]) {
          const leftWord = s.substring(left, left + wordLength);
          seen[leftWord]--;
          left += wordLength;
          count--;
        }
        if (count === wordCount) {
          result.push(left);
          const leftWord = s.substring(left, left + wordLength);
          seen[leftWord]--;
          left += wordLength;
          count--;
        }
      } else {
        seen = {};
        count = 0;
        left = right;
      }
    }
  }
  return result;
}
