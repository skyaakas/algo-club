/* Write a recursive function that takes in a number, and returns the sum of all the numbers*/
function sum(num){
    if(num < 1) return 0;

    return num + sum(num-1);
}
console.log(sum(2));