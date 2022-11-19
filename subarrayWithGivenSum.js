function subArraySum(arr, n, sum) {

    let currentSum = arr[0];
    let start = 0;

    for (let i = 1; i <= n; i++) {

        while (currentSum > sum && start < i - 1) {
            currentSum -= arr[start];
            start++;
        }
        if (currentSum == sum) {
            let end = i - 1;
            console.log("sum found between indexes " + start + " and " + end);
            return 1;
        }
        if (i < n) {
            currentSum += arr[i];
        }
    }
    console.log("No subarray found");
    return 0;
}
let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 33;
subArraySum(arr, n, sum);