function rearrange(arr, n) {

    let min_ind = 0;
    let max_ind = n - 1;
    let max_elem = arr[n - 1] + 1;

    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            arr[i] += (arr[max_ind] % max_elem) * max_elem;
            max_ind--;
        }
        else {
            arr[i] += (arr[min_ind] % max_elem) * max_elem;
            min_ind++;
        }
    }
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(arr[i] / max_elem);
    }

}
let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;
rearrange(arr, n);

for (i = 0; i < n; i++) {
    console.log(arr[i]);
}