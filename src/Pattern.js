
// a program to display this pattern 


const number = 5
let str = ''
for (let index = 0; index <= number; index++) {

    for (let j = number; j >= 0; j--) {
       


        if (j == index || j == number || index == 0) {

            str += '*'

        } else {
            str += ' '
        }

    }
    str += '\n'


}
console.log(str);






// program in JS to check whether a number is prime or not

const randomNum = Math.floor(Math.random() * 100);
let prime = true;


if (randomNum === 1) {
    console.log("the number is.");
}




else if(randomNum>1){
    for (let index = 0; index < randomNum; index++) {
        console.log(index);
        if (randomNum % 2 ==0) {
            prime = false;
            break;
       
        }

    }
    if (prime) {
                console.log(`${randomNum} is a prime number`);
            } else {
                console.log(`${randomNum} is a not prime number`);
            }
}