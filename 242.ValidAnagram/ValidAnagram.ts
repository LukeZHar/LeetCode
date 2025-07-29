function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const charCount: { [key: string]: number } = {};
    
    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
        charCount[t[i]] = (charCount[t[i]] || 0) - 1;
    }
    
    for (const count of Object.values(charCount)) {
        if (count !== 0) return false;
    }
    
    return true;
}