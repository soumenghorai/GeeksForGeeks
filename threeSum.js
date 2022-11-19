var threeSum = function(nums) {
    let result = [];
  for(let i = 0; i<=nums.length-2; i++) {
      for(let j = i+1; j<=nums.length-1; j++) {
          for(let k = j+1; k<=nums.length-1; k++) {
              if(nums[i] + nums[j] + nums[k] === 0) {
                  result.push([nums[i], nums[j], nums[k]]);
              }
          }
      }
  }
  return result;
};
let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));