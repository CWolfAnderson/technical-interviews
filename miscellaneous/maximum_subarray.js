let numbers = [1, 2, -4, 5, 2, 3, -2, 3];

let maxSub = maxSubarray(numbers);

console.log(maxSub);

function maxSubarray(nums) {
  
  if (nums.length === 0) return -1;
  
  let curMax = nums[0];
  let realMax = nums[0];
  let current;
  
  for (let i = 1; i < nums.length; i++) {
    current = nums[i];
    curMax = max(current, curMax + current);
    if (curMax > realMax) realMax = curMax;
  }
  
  return realMax;
}

function max(num1, num2) {  
  return num1 > num2 ? num1 : num2;
}