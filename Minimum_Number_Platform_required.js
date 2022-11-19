function findPlatform(arr, dep, n, m){

    arr = arr.sort((a,b) => a - b);
    dep = dep.sort((a,b) => a - b);

    let platform_needed = 1;
    let result = 1;
    let i = 1;
    let j = 0;

    while(i<n && j<m){
        if(arr[i] <= dep[j]){
            platform_needed++;
            i++;
        }
        else if(arr[i] > dep[j]){
            platform_needed--;
            j++;
        }
        if(platform_needed>result){
            result = platform_needed;
        }
    }
    return result;
}
let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];
let n = arr.length;
let m = dep.length;
console.log("Minimum number of platform required " + findPlatform(arr, dep, n, m));