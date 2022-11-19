function maxSubArraySum(arr , n) {
    // let max_so_far = Number.MIN_VALUE;
    let max_so_far = arr[0];
    let max_ending_here = 0;
    let start = 0;
    let end = 0;
    let s = 0;

    for (let i = 0; i < n; i++) {
        max_ending_here += arr[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }

        if (max_ending_here < 0) {
            max_ending_here = 0;
            s = i + 1;
        }
    }
//   return max_so_far;
console.log("Maximum contiguous sum is " + max_so_far);
console.log("<br/>Starting index " + start);
console.log("<br/>Ending index " + end);
}

// Driver code
 
    var arr = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
    var n = arr.length;
    maxSubArraySum(arr, n);
    // console.log(maxSubArraySum(a, n));
   
