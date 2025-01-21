const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];  // To store the subarrays
  let currentSubarray = [];  // To build the current subarray
  let currentSum = 0;  // To track the sum of the current subarray
  
  for (let num of arr) {
    if (currentSum + num <= n) {
      // If the sum doesn't exceed n, add the number to the current subarray
      currentSubarray.push(num);
      currentSum += num;
    } else {
      // If the sum exceeds n, push the current subarray to the result and start a new one
      result.push(currentSubarray);
      currentSubarray = [num];  // Start a new subarray with the current number
      currentSum = num;  // Update the sum to the current number
    }
  }
  
  // Push the last subarray (if any) into the result
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Prompt the user to enter the maximum sum n
const n = parseInt(prompt("Enter n: "), 10);  // Get the value of n from the user

// Call the divide function and show the result in an alert bo
alert(JSON.stringify(divide(arr, n)));
