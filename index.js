function largestSubarraySum(array) {
  let current = 0;
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    current = Math.max((current + el), 0)
    max = Math.max(current, max)
  }

  return max;
}
