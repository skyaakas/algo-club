/*Given the array, create the linear search algorithm, 
a function to find an element in a list, the program should output the element that was found in the list, 
the index of the element, and if the element is not found in the list.
*/
const arr = [1,2,3,4,5,6,7,8,9,10];
function checkForN(arr, n) {
    for(let i =0; i < arr.length; i++){
        if(n == arr[i]){
            return `${n} is found at index ${i}`
        }
    }
    return `${n} is not found in the array`
}
let number = checkForN(arr, 10);
console.log(number);