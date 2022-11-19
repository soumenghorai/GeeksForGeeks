function maxProfit(arr, n) {

    let maxProfit = 0;
    let minProfit = arr[0];

    for (let i = 0; i < n; i++) {
        minProfit = Math.min(minProfit, arr[i]);
        let Profit = arr[i] - minProfit;
        maxProfit = Math.max(maxProfit, Profit);
    }
    return maxProfit;
}
let arr = [100, 180, 260, 310, 40, 535, 695];
let n = arr.length;
console.log(maxProfit(arr, n));