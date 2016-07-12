var numbers = [1, 2, -4, 5, 2, 3, -2, 2];

var maxSub = maxSubarray(numbers);

console.log(maxSub);

function maxSubarray(nums) {
  var curMax = nums[0];
  var maximum = nums[0];
  
  for (var i = 0; i < nums.length; i++) {
    curMax = max(nums[i], curMax + nums[i]);
    if (curMax > maximum) maximum = curMax;
  }
  
  return maximum;
}

function max(num1, num2) {  
  return num1 > num2 ? num1 : num2;
}