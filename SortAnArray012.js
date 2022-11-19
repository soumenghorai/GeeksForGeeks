
function sort012(arr, n) {
	for (let i = 0; i < n; i++) {

		let low = 0;
		let high = n - 1;
		let mid = 0;
		// Iterate till all the elements are sorted
		while (mid <= high) {
			// If the element is 0
			if (arr[mid] == 0) {
				temp = arr[low];
				arr[low] = arr[mid];
				arr[mid] = temp;
				low++;
				mid++;
			}
			// If the element is 1
			else if (arr[mid] == 1) {
				mid++;
			}
			// If the element is 2
			else if (arr[mid] == 2) {
				temp = arr[mid];
				arr[mid] = arr[high];
				arr[high] = temp;
				high--;
			}

		}

	}
	return arr;
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
let n = arr.length;
let arr1 = sort012(arr, n);
console.log(arr1);



