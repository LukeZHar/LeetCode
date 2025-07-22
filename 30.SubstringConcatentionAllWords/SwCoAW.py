class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        if not s or not words:
            return []

        word_length = len(words[0])
        word_count = {}
        for word in words:
            word_count[word] = word_count.get(word, 0) + 1
        num_words = len(words)
        total_length = word_length * num_words
        n = len(s)
        result = []

        for offset in range(word_length):
            left = offset
            right = offset
            curr_count = {}
            count = 0
            while right + word_length <= n:
                word = s[right:right + word_length]
                right += word_length
                if word in word_count:
                    curr_count[word] = curr_count.get(word, 0) + 1
                    count += 1
                    while curr_count[word] > word_count[word]:
                        left_word = s[left:left + word_length]
                        curr_count[left_word] -= 1
                        left += word_length
                        count -= 1
                    if count == num_words:
                        result.append(left)
                else:
                    curr_count.clear()
                    count = 0
                    left = right
        return result