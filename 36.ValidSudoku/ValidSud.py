class Solution:
    def isValidSudoku(self, board: 'List[List[str]]') -> bool:
        # Use boolean arrays for faster lookup
        rows = [[False]*9 for _ in range(9)]
        cols = [[False]*9 for _ in range(9)]
        boxes = [[False]*9 for _ in range(9)]

        for r in range(9):
            for c in range(9):
                num = board[r][c]
                if num == '.':
                    continue
                idx = int(num) - 1
                box_index = (r // 3) * 3 + (c // 3)
                if rows[r][idx] or cols[c][idx] or boxes[box_index][idx]:
                    return False
                rows[r][idx] = True
                cols[c][idx] = True
                boxes[box_index][idx] = True
        return True