function findKthElement(arr1, arr2, m, n, k) {

    let i = 0;
    let j = 0;
    let d = 0;

    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            d++;
            if (d == k)
                  return arr1[i];
            i++;
            
        }
        else {
            d++;
            if (d == k)
                return arr2[j];
            j++;

        }
    }

while (i < m) {
    d++;
    if (d == k)
        return arr1[i];
    i++;

}
while (j < n) {
    d++;
    if (d == k)
        return arr2[j];
    j++;

}
return -1;

}
let arr1 = [2, 3, 6, 7, 9];
let arr2 = [1, 4, 8, 10];
let k = 5;
console.log(findKthElement(arr1, arr2, 5, 4, k));