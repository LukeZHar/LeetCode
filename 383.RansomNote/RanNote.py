class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        from collections import Counter
        
        # Count the occurrences of each character in both strings
        ransom_count = Counter(ransomNote)
        magazine_count = Counter(magazine)
        
        # Check if each character in ransomNote can be constructed from magazine
        for char, count in ransom_count.items():
            if magazine_count[char] < count:
                return False
        
        return True