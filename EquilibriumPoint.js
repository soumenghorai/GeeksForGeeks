function Equilibrium(arr, n) {
    let totalSum = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        totalSum += arr[i];
    }

    for (let i = 0; i < n; i++) {
        if (sum == (totalSum - sum - arr[i])) {
            return i + 1;
        }
        sum += arr[i];
    }
    return -1;
}

let arr = [2, 3, 4, 6, 4, 5];
let n = arr.length;
console.log(Equilibrium(arr, n));