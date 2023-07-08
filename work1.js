let prompt = require('prompt-sync')({sigint: true})
// number 1
let first_name = prompt('Enter First Name: ')
let last_name = prompt('Enter Last Name: ')
let age = Number(prompt('Enter age: '))
let year = Number(prompt('Current year: '))

let EarthlyAppearance = year - age;
 

console.log(`${first_name} ${last_name} , you are ${age} and you came to Earth in the year ${EarthlyAppearance}`)


// number 2
let name = 'Tunde Onifade';
let age = 23;
let departmentname = 'Computer science';
let score = 34.72;

 console.log(`Welcome ${name}, you are in ${departmentname}, you are ${age} years old and your score is ${score}`)


// number 3
let pounds = Number(prompt('Enter weight(pounds): '))
let kg = pounds * 0.45;

console.log( `Your weight in kilograms is ${kg}`)



// If and else assignment

// number 1

let n = Number(prompt('Enter number: '))
  if (n % 2 !== 0) {
    console.log("Weird")
  } 
  else {
    if (n % 2 == 0, n >= 2 && n <= 5) {
      console.log("Not Weird")
    }
     else if (n % 2 == 0, n >= 6 && n <= 20) {
      console.log("Weird")
    } 
     else if (n % 2 == 0,  n >= 20) {
      console.log("Weird")
    } 
    else {
      console.log("Not Weird")
    }
  }

//   number 2

let num_1 = Number(prompt('Enter first number: '))

let num_2 = Number(prompt('Enter second number: '))

let operator = prompt('Enter arithmetic sign: ')

if(operator == '+'){
    result = num_1 + num_2;
}

else 
if(operator == '-'){
    result = num_1 - num_2;
}

else
if(operator == '*'){
    result = num_1 * num_2;
}

else
if(operator == '/'){
    result = num_1 / num_2;
}

console.log(`${num_1} ${operator} ${num_2} = ${result}`)

// number 3  

  let house_price = 1000000;

  let user_price = Number(prompt("Enter your budgeted house price:"))


  if (user_price < 500000 && user_price > 300000) {
    downpayment = (10 / 100) * user_price;
  } else if (user_price > 500000) {
    downpayment = (20 / 100) * user_price;
  } 

  console.log(`Your downpayment is ${downpayment}`)


// number 4 


let mathematics = prompt("Question 1: What is the value of pi: ")

let frontend = prompt("Question 2: what is the file extension of html?: ")

let data = prompt("Question 3: how many students do we have for full stack web dev in digital fortress'?: ")

if(mathematics == '3.142'){
    console.log('Question 1: "3.142" is correct')
}
else{console.log(`Question 1: ${mathematics} is wrong`)}

if(frontend == '.html'){
    console.log('Question 2: ".html" is correct')
}
else{console.log(`Question 2: ${frontend} is wrong`)}

if(data == '6'){
    console.log('Question 3: "6" is correct')
}
else{console.log(`Question 3: ${data} is wrong`)
}

