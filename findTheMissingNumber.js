function missingNumber(arr, n){

    // For xor of all the elements in array
    let a = arr[0];

    // For xor of all the elements from 1 to n+1
    let b = 1;

    for(let i = 1; i<n; i++){
        a = a^arr[i];
    }
    for(let i = 2; i<=n + 1; i++){
        b = b^i;
    }
    return a^b;
}
let arr = [1,2,3,4,5,6,7,9];
let n = arr.length;
console.log(missingNumber(arr, n));