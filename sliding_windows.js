/** What are Sliding windows?
 *
 * This algorithm is used to find a subarray within an array that satisfies one or more conditions
 * The window is a subset of items, resize and refocus (move) the window until we find the solution
 * Sliding Windows is a subset of Dynamic Programming --> Which means to solve a problem, dividing it into sub problems
 *
 * Asked in algorithm interviews
 *
 *  Time complexity of O(n) = Linear Time
 *  Space complexity of O(1) = constant space
 *
 * Find sub arrays in large arrays --> there are many questions that this can be applied to
 * Subarrays are always contiguous
 * Input size could be anything
 * -- this means that we cannot store all possible variations --> brute force wont work when scaled up
 * -- this means we cannot use recursion --> call stack will be overflowing
 *
 * Think through all data structures you can use in the solution
 * Hashmaps are helpful here.
 *
 * Statically sized - A sliding window, its size does not change
 * only record the value you are looking for.
 */
const arrayOne = [166, 224, 380, 42, 511, 36, 57, 8, 6679, 18880];

const array = [1, 2, 8, 9, 5, 7, 6, 3, 4];

//Let’s define a function that returns the maximum sum of a subarray of size num ( 3)
function maxSumArr(arr, num) {
  console.log("num", num);
  // define values to track
  let maxSum = 0;
  let tempSum = 0;

  // handle if array is smaller than num
  if (arr.length < num) return null;

  // iterate through the array to num, adding to temp sum
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
    console.log("first for loop:", tempSum);
  }

  // set the tempSum to the current maxSum
  maxSum = tempSum;

  // iterate again, this time starting from the current window end
  for (let i = num; i < arr.length; i++) {
    // tempSum minus the preivous element plus the new element
    console.log("tempsum:", tempSum);
    console.log("previous:", arr[i - num]);
    console.log("next:", arr[i]);
    console.log(`${tempSum} - ${arr[i - num]} + ${arr[i]}`);

    tempSum = tempSum - arr[i - num] + arr[i];

    maxSum = Math.max(tempSum, maxSum);
    console.log("maxSum::::", maxSum);
  }
  return maxSum;
}

// console.log(maxSumArr(array, 2));

const string = ["p", "w", "w", "k", "e", "w"];

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lengthOfLongestSubstringNoRepeatedChar = (s) => {
  if (s == null || s.length == 0) return;

  let maxCount = 0;
  let storedCount = 0;
  let subArray = [];
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (subArray.includes(s[i])) {
      console.log("stop");
      subArray = [s[i]];
      maxCount = 1;
    } else {
      subArray.push(s[i]);
      maxCount++;
    }
    console.log("subarray:", subArray);
    storedCount = Math.max(maxCount, storedCount);
  }

  console.log(subArray);
  console.log(maxCount);
  console.log(storedCount);
};

console.log(lengthOfLongestSubstringNoRepeatedChar(alphabet));
