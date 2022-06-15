const arr = [1,2,3,4,5,6,7,8,9,10];

function checkForN(arr, n) {
    for(let i = 0; i < arr.length; i++) {
        if (n === arr[i]) {
            return `${n} exists at index ${i}`;
        }
    }
  return `${false} ${n} does not exist in the given array.`;
}

let number = checkForN(arr, 10);
console.log(number);