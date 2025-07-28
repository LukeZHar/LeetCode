function isIsomorphic(s: string, t: string): boolean {
    const mapS: Record<string, string> = {};
    const mapT: Record<string, string> = {};
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
    
        if (!mapS[charS]) {
        mapS[charS] = charT;
        }
        if (!mapT[charT]) {
        mapT[charT] = charS;
        }
    
        if (mapS[charS] !== charT || mapT[charT] !== charS) {
        return false;
        }
    }
    
    return true;
};