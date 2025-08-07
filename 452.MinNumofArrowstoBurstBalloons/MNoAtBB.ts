function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) return 0;

    // Sort the points based on the end of the intervals
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let currentEnd = points[0][1];

    for (let i = 1; i < points.length; i++) {
        // If the start of the current balloon is greater than the end of the last balloon shot
        if (points[i][0] > currentEnd) {
            arrows++;
            currentEnd = points[i][1];
        }
    }

    return arrows;
}