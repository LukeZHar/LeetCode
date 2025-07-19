class Solution:
    def reverseWords(self, s: str) -> str:
        # Split the string by spaces, filter out empty strings, reverse the list, and join with a single space
        return ' '.join(s.split()[::-1])
