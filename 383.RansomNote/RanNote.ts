/**
 * @param ransomNote - a string representing the ransom note
 * @param magazine - a string representing the magazine letters
 * @returns boolean - true if the ransom note can be constructed from the magazine letters, false
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
    const letterCount: Record<string, number> = {};

    // Count the occurrences of each letter in the magazine
    for (const letter of magazine) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    // Check if we can construct the ransom note
    for (const letter of ransomNote) {
        if (!letterCount[letter]) {
            return false; // Letter not available in sufficient quantity
        }
        letterCount[letter]--;
    }

    return true; // All letters needed for the ransom note are available
}