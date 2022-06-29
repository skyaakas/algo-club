/*Create a recursive function that counts to 10 and the displays the count,  
the algorithm should stop after the nth iteration. 
*/

let count = 1;

function recursivefn(){
    console.log (`${count}`);
    if(count==10){
        return
    }
    else{
        count++
        recursivefn();
    }
    
    
}
recursivefn();