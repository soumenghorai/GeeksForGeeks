function zigZag(arr, n) {

    let flag = false;
    for (let i = 0; i < n; i++) {
        for (let i = 0; i <= n - 2; i++) {
            if (flag) {
                if (arr[i] < arr[i + 1]) {
                    temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                }
            }
            else {
                if (arr[i] > arr[i + 1]) {
                    temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                }
            }
            flag = !flag;
        }
    }
    return arr;
}
let arr = [4, 3, 7, 8, 6, 2, 1];
let n = arr.length;
console.log(zigZag(arr, n));




