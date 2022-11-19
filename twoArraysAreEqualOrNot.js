function areEqual(arr1, arr2)
{
    let N = arr1.length;
    let M = arr2.length;

    if (N != M)
        return false;

    // Store arr1[] elements and their counts in
    // hash map
    let map = new Map();
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (map.get(arr1[i]) == null)
            map.set(arr1[i], 1);
        else {
            count = map.get(arr1[i]);
            count++;
            map.set(arr1[i], count);
        }
    }
    // Traverse arr2[] elements and check if all
    // elements of arr2[] are present same number
    // of times or not.
    for (let i = 0; i < N; i++) {
        // If there is an element in arr2[], but
        // not in arr1[]
        if (!map.has(arr2[i]))
            return false;

        // If an element of arr2[] appears more
        // times than it appears in arr1[]
        if (map.get(arr2[i]) == 0)
            return false;

        count = map.get(arr2[i]);
        --count;
        map.set(arr2[i], count);
    }
    return true;
}
 
let arr1 = [3, 5, 2, 5, 2];
let arr2 = [2, 3, 5, 5, 2];
  
// Function call
    if (areEqual(arr1, arr2))
        console.log("Yes");
    else
        console.log("No");