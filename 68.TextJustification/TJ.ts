function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = [];
    let currentLine: string[] = [];
    let currentLength = 0;

    for (const word of words) {
        if (currentLength + word.length + currentLine.length > maxWidth) {
            for (let i = 0; i < maxWidth - currentLength; i++) {
                currentLine[i % (currentLine.length - 1 || 1)] += ' ';
            }
            result.push(currentLine.join(''));
            currentLine = [];
            currentLength = 0;
        }
        currentLine.push(word);
        currentLength += word.length;
    }

    result.push(currentLine.join(' ') + ' '.repeat(maxWidth - currentLength - currentLine.length + 1));
    return result;
}