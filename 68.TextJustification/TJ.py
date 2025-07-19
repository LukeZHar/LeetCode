class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        res = []
        cur_line = []
        num_of_letters = 0
        
        for word in words:
            if num_of_letters + len(word) + len(cur_line) > maxWidth:
                for i in range(maxWidth - num_of_letters):
                    cur_line[i % (len(cur_line) - 1 or 1)] += ' '
                res.append(''.join(cur_line))
                cur_line, num_of_letters = [], 0
            
            cur_line.append(word)
            num_of_letters += len(word)
        
        res.append(' '.join(cur_line).ljust(maxWidth))
        return res