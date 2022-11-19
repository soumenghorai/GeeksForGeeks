function maxProfit(arr, n) {

    let profit = 0;

    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            profit += arr[i] - arr[i - 1];
        }
    }
    return profit;
}
let arr = [100, 180, 260, 310, 40, 535, 695];
let n = arr.length;
console.log(maxProfit(arr, n));