function reverseWords(s: string): string {
    // Trim leading and trailing spaces, split by spaces, filter out empty strings, and join with a single space
    return s.trim().split(/\s+/).reverse().join(' ');
};