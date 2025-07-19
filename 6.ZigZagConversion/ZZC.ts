function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }
    
    const rows: string[] = Array.from({ length: numRows }, () => '');
    let currentRow = 0;
    let goingDown = false;
    
    for (const char of s) {
        rows[currentRow] += char;
        if (currentRow === 0) {
        goingDown = true;
        } else if (currentRow === numRows - 1) {
        goingDown = false;
        }
        currentRow += goingDown ? 1 : -1;
    }
    
    return rows.join('');
}