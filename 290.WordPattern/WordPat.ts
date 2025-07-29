function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const charToWord: { [key: string]: string } = {};
  const wordToChar: { [key: string]: string } = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    const charMapped = Object.prototype.hasOwnProperty.call(charToWord, char);
    const wordMapped = Object.prototype.hasOwnProperty.call(wordToChar, word);

    if (!charMapped && !wordMapped) {
      charToWord[char] = word;
      wordToChar[word] = char;
    } else if (
      (charMapped && charToWord[char] !== word) ||
      (wordMapped && wordToChar[word] !== char)
    ) {
      return false;
    }
  }

  return true;
}
