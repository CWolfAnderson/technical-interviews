var numbers = [1, 2, -4, 5, 2, 3, -2, 3];

var maxSub = maxSubarray(numbers);

console.log(maxSub);

function maxSubarray(nums) {
  
  if (nums.length === 0) return -1;
  
  var curMax = nums[0];
  var realMax = nums[0];
  var current;
  
  for (var i = 1; i < nums.length; i++) {
    current = nums[i];
    curMax = max(current, curMax + current);
    if (curMax > realMax) realMax = curMax;
  }
  
  return realMax;
}

function max(num1, num2) {  
  return num1 > num2 ? num1 : num2;
}