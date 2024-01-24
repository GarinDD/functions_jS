// function createRandom() {
//    return Math.round(Math.random() * 6) + 1;
// }
// x = createRandom();
// alert(x)

// for(i=i;i<5;i++) {
//     // console.log(createRandom())
// }

// function sum(a, b) {
//     console.log( a +b )
//     return a +b ;
// }
// alert(sum(3,5))

counter = 0
function hi(name, text="Привет") {
    counter++;
    alert(name+ ", " +text)
}
function showHiCount() {
    alert("Я поприветствовал " + counter + " человек")
}
hi("Вася")
hi("Петя")
hi("Настя", "здравствуйте")
showHiCount()
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





 const sayHi = function(funcOne, funcTwo){ //this function can't be used earlier, because it's a variable **
    console.log(funcOne(3))
    console.log(funcTwo)
// 
 }
 let b = mult(a)

 sayHi(mult,myFunc)