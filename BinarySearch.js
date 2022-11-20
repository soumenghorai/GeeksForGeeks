function binarySearch(arr, n, target) {
  let left = 0;
  let right = n - 1;
  let mid;

  while (right >= left) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) return mid;

    if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  // We reach here when element is not
  // present in array
  return -1;
}
let arr = [2, 3, 4, 10, 40];
let n = arr.length;
let target = 10;
console.log(binarySearch(arr, n, target));
// result = binarySearch(arr, n, target);
// if(result == -1)
//   console.log("Element not present in the array");
// else
//   console.log("Element present in the array " + result);
