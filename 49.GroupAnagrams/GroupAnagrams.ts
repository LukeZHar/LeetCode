function groupAnagrams(strs: string[]): string[][] {
    const anagrams: { [key: string]: string[] } = {};

    for (const s of strs) {
        const key = s.split('').sort().join('');
        if (!anagrams[key]) {
            anagrams[key] = [];
        }
        anagrams[key].push(s);
    }

    return Object.values(anagrams);
}