function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return s === s.split('').reverse().join('');
}