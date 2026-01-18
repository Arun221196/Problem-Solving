/**
 * Question: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - minPrice;
        maxProfit = Math.max(profit, maxProfit);
        minPrice = Math.min(prices[i], minPrice);
    }
    return maxProfit;
};