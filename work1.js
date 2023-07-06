let prompt = require('prompt-sync')({sigint: true})
// // number 1
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

console.log( Your weight in kilograms is ${kg}`)
