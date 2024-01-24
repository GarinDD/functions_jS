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

// counter = 0
// function hi(name, text="Привет") {
//     counter++;
//     alert(name+ ", " +text)
// }
//  function showHiCount() { //declaration function can be used before it was created
//     alert("Я поприветствовал " + counter + " человек")
// }
// hi("Вася")
// hi("Петя")
// hi("Настя", "здравствуйте")
// showHiCount()
// let a = 3
// sayHi() **
// function mult(x,y){
//     // y = y || 6
//     y = y ? y : 6
//     a = x * 2 + y
//     return a  
// }



// function myFunc(){
//     return 2 * 2
// }

//  const sayHi = function(callbackOne, callbackTwo){ // this function can't be used earlier, because it's a variable 
//  //** expression function  be used before it was created //
//     console.log(callbackOne(3))
//     console.log(callbackTwo())
// // 
//  }
//  let b = mult(a)

// //  mult = callbackOne
// //  myFunc = callbackTwo

//  sayHi(mult,myFunc)

let a = 3
let mult = (x, y = 6) => {
a = x * 2 + y
    return a
}
console.log(mult(a))