/**
 * Do not return anything, modify board in-place instead.
 * @param {number[][]} board
 * @return {void}
 */

function gameOfLife(board) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    const countLiveNeighbors = (r, c) => {
        let count = 0;
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && Math.abs(board[nr][nc]) === 1) {
                count++;
            }
        }
        return count;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const liveNeighbors = countLiveNeighbors(r, c);
            if (board[r][c] === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[r][c] = -1; // Mark as dead
                }
            } else {
                if (liveNeighbors === 3) {
                    board[r][c] = 2; // Mark as alive
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === -1) {
                board[r][c] = 0; // Convert to dead cell
            } else if (board[r][c] === 2) {
                board[r][c] = 1; // Convert to alive cell
            }
        }
    }
}