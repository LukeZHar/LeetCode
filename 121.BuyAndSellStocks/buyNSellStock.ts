function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price if the current price is lower
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Calculate profit if selling at the current price
            const profit = prices[i] - minPrice;
            // Update max profit if this profit is greater
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}