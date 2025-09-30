let x = 12;

 y = '12';

 z = true;
 x = '23';

 //array
 x =[2,3,1,5];

 //template literals/interpolation 
console.log(`x: ${x}, y: ${y}`);

let firstName = "Juice";
let lastName = "WRLD";  

const fullName =`${firstName} ${lastName}`;

// console.log(fullName);

// console.log(typeof x);

// tenary operator
let age =22;
const message = age < 18 ? 'cannot vote' : 'can vote';

// console.log(message);

//if-else statement 
// if(age<18){
//     console.log('cannot vote');
// }else{
//     console.log('can vote');
// }

//for loop
let arr = [1,2,3,4,5];
for(let i=0; i<arr.length; i++){
    //console.log(arr[i]);
}

//for in 
// i++ = execute before increment 
// ++i = it increases before executing the statement
let myObj ={name: "John", age: 30, city: "New York"};
for (let x in myObj){
    console.log(`${x}: ${myObj[x]}`);
}

let myStr = "Hello World";
for (let x of myStr){
    // console.log(x);
}


// ...existing code...

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Print prime numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
    if (isPrime(i)) {
        console.log(i + " is a prime number");
    }
}

// ...existing code...
