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

// let a = 3
// let mult = (x, y = 6) => {
// a = x * 2 + y
//     return a
// }
// console.log(mult(a))

let fruits = ["Apple","Orange","Pear"];

fruits.pop()

function printArr(arr){
    arr.forEach((item) => {
        console.log(item)
    })
}


fruits.push('Pear');

fruits.splice(1,1,"Pomegrenade","Banana")

printArr(fruits)

console.log(fruits.pop())

console.log(typeof fruits)

let arr = fruits.slice(2,fruits.length)

printArr(arr)

let arr2 = [3,7,2,4]

let arr3 = arr2.map((item) => item * 2)

arr2.forEach((item,index,arr) => {
    arr[index] = item * 2
})

// printArr(arr2)

arr2.sort((a,b) => a - b)
printArr(arr2)

// a - b  => from the lowest to the highest
// b - a => from the highest to the lowest