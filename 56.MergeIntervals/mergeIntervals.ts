function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];

    // Sort intervals by the start time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged: number[][] = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];

        // If the current interval overlaps with the next one, merge them
        if (currentInterval[1] >= nextInterval[0]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            // No overlap, push the current interval and move to the next
            merged.push(currentInterval);
            currentInterval = nextInterval;
        }
    }

    // Push the last interval
    merged.push(currentInterval);

    return merged;
}