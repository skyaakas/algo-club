/* Create the binary search alogrithm,  given the array
 create a function that takes in an array and target value as the paraemeters,
 search the array and return the index of the target value
*/

let arr = [2,3,4,5,6,7,8,9,10];
function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
      // Find the middle index
      const middle = Math.floor((start + end) / 2);
      if (array[middle] === target) {
        return middle;
      } else if (array[middle] < target) {
        return start = middle + 1;
      } else {
        return end = middle - 1;
      }
    }
    // If we got this far, we never found the target
    return -1;
}
console.log(binarySearch(arr, 5))
