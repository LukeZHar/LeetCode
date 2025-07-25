function minWindow(s: string, t: string): string {
    if (s.length < t.length) return "";

    const tCount: Record<string, number> = {};
    for (const char of t) {
        tCount[char] = (tCount[char] || 0) + 1;
    }

    const required = Object.keys(tCount).length;
    let left = 0, right = 0, formed = 0;
    const windowCounts: Record<string, number> = {};
    let minLength = Infinity;
    let minLeft = 0;

    while (right < s.length) {
        const char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (tCount[char] && windowCounts[char] === tCount[char]) {
            formed++;
        }

        while (left <= right && formed === required) {
            const currentLength = right - left + 1;
            if (currentLength < minLength) {
                minLength = currentLength;
                minLeft = left;
            }

            const leftChar = s[left];
            windowCounts[leftChar]--;
            if (tCount[leftChar] && windowCounts[leftChar] < tCount[leftChar]) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return minLength === Infinity ? "" : s.substring(minLeft, minLeft + minLength);
}