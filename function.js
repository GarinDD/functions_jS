let a = 3
// sayHi() **
function mult(x,y){
    // y = y || 6
    y = y ? y : 6
    a = x * 2 + y
    return a  
}

function myFunc(){
    return 2 * 2
}

let b = mult(a)

console.log(b)

// const sayHi = function(){ this function can't be used earlier, because it's a variable **

// }