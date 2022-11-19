// let arr = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];


function findWater(arr, n){
    
    let left = new Array(n);
    let right = new Array(n);
    let water = 0;

    left[0] = arr[0];
    for(let i = 1; i<n; i++){
        left[i] = Math.max(left[i - 1], arr[i]);
    }
    right[n-1] = arr[n -1];
    for(let i = n-2; i>=0; i--){
        right[i] = Math.max(right[i + 1], arr[i]);
    }   
    for(let i = 0; i<n; i++){
        water += Math.min(left[i], right[i]) - arr[i];
    }
    return water;    
}
let arr = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];
let n = arr.length;
console.log(findWater(arr, n));