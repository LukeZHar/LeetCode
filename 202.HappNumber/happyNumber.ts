function isHappy(n: number): boolean {
    const seen = new Set<number>();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = String(n)
            .split('')
            .reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);
    }

    return n === 1;
}