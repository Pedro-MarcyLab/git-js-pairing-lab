//Code your solutions in this file

//problem 1

/* function fiveToOneHundred(){
    for(let i = 5; i <= 100; i++) {
        console.log(i)
    }
}


//problem 2
const multiplesOfThree = () => {
    for(let i = 1; i < 101; i++) {
        if(i % 3 === 0) {
            console.log(i);
        }
    }
}

multiplesOfThree()
//fiveToOneHundred()


//problem 3
const multiplesOfThreeOrFive = () => {
    for(let i = 1; i <= 100; i++) {
        if((i % 3 === 0) || (i % 5 === 0)) {
            console.log(i);
        }
    }
}
multiplesOfThreeOrFive()
*/


//problem 4 

/*const untilNum = (int) => {
    for(let i = 1; i < int; i++) {
        console.log(i);
    }
}

untilNum(25);


//problem 5
const multiply = (num1, num2) => {
    return num1 * num2
};
console.log(multiply(10, 2))
*/
//problem 6
/*const add = (num1, num2) => {
    if(num1 !== num2) {
        return num1 + num2;
    } else {
        return (num1 + num2) * 3;
    }
}

console.log(add(3, 3)); 
//problem 7
const isNegative = (num) => {
    if(num < 0) {
        return true
    } else if (num ===0){
        return "0 is niether positive nor negative"
    }else{ 
        return false
    }
}
console.log(isNegative(0)) */

//problem 8 

const triangleArea = (height, base) => {
    return (base * height) / 2;
}

console.log(triangleArea(3, 2));