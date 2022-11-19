function reverseArrayInGroups(arr, n, k) {
    for (let i = 0; i < n; i += k) {
        let left = i;
        let right = Math.min(i + k - 1, n - 1);

        // Reverse the sub-array [left, right]
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 3;
let n = arr.length;
let arr1 = reverseArrayInGroups(arr, n, k);
console.log(arr1);

