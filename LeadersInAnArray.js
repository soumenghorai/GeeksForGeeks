/*
function printLeaders( arr, n)
{
    for (let i = 0; i < n; i++){
        for (j = i+1; j < n; j++){
            if (arr[j] >= arr[i])
                break;
        }   
        if (j == n) // the loop didn't break
            console.log(arr[i]);
  }
}
// driver code
        let arr = [ 16, 17, 4, 3, 5, 2 ];
        let n = arr.length;
        // Function calling
        printLeaders(arr, n);
*/
/*   
function printLeaders(arr,n)
    {
        let maxFromRight = arr[n-1];
 
        //  Rightmost element is always leader 
         console.log(maxFromRight);
 
        for (let i = n-2; i >= 0; i--)
        {
            if (maxFromRight < arr[i])
            {       
                maxFromRight = arr[i];
                console.log(maxFromRight);
            }
        }
    }
 
    // Driver program to test above function
 
    let arr = [16, 17, 4, 3, 5, 2];
    let n = arr.length;
    printLeaders(arr, n);    
*/

function printLeaders(arr, n) {

    let result = [];
    let maxFromRight = arr[n - 1];
    result.push(arr[n - 1]);

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxFromRight) {
            result.push(arr[i]);
            maxFromRight = arr[i];
        }
    }
    result.reverse();
    return result;
}
let arr = [16, 17, 4, 3, 5, 2];
let n = arr.length;
console.log(printLeaders(arr, n));