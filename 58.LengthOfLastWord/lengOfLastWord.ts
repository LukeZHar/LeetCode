function lengthOfLastWord(s: string): number {
    // Trim the string to remove leading and trailing spaces
    s = s.trim();
    
    // Split the string by spaces to get all words
    const words = s.split(' ');
    
    // Return the length of the last word
    return words[words.length - 1].length;
}