class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        if not board or not board[0]:
            return
        
        rows, cols = len(board), len(board[0])
        
        # Directions for the 8 neighbors
        directions = [(-1, -1), (-1, 0), (-1, 1), 
                      (0, -1),          (0, 1), 
                      (1, -1), (1, 0), (1, 1)]
        
        # Create a copy of the original board
        original = [[board[r][c] for c in range(cols)] for r in range(rows)]
        
        for r in range(rows):
            for c in range(cols):
                live_neighbors = sum(original[r + dr][c + dc] == 1 
                                     for dr, dc in directions 
                                     if 0 <= r + dr < rows and 0 <= c + dc < cols)
                
                if original[r][c] == 1:
                    # Cell is currently alive
                    if live_neighbors < 2 or live_neighbors > 3:
                        board[r][c] = 0
                else:
                    # Cell is currently dead
                    if live_neighbors == 3:
                        board[r][c] = 1 