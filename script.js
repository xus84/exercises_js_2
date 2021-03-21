/*

let boo = false; //Boolean true or false
console.log(typeof (boo));
if (boo) {
  console.log(boo);
} else {
    console.log('boo is not true');
}


let person = prompt('Your Name?');
let message = "Welcome, " + "br" + person;

console.log(message);

document.write(message);
document.getElementById('message').innerHTML = message;

let myName1 = prompt('What is your name?');
let message1 = 'Welcome to the page, ';
let output = message1 +  myName1;
console.log(output);
document.write(myName1);
document.getElementById('message1').innerHTML = myName1;
console.log(myName1);*/

/*let message = 'It\'s my Page';
message = "It\s my page";
let person = "Joe Doe";
let output = message + ' "Hello" World ' + person;

document.write(person + "<br>" + message);

document.getElementById('demo').innerHTML = output;

message1 = `it's my page. ${person}  "hello" world`;
document.getElementById('demo1').innerHTML = message1;

let userName = "zumba";
let message2 = `Welcome, ${userName}`;
document.getElementById('demo2').innerHTML = message2;

let myStr = "1000";
let myNum = 100;
myStr = Number(myStr);
myStr = myStr + myNum;
myStr = myStr.toString();
//coercion
myNum = String(myNum);
console.log(myStr);
console.log(typeof (myStr));
console.log(typeof (myNum));

let val1 = 5;
let val2 = 7;
let val3 = 9;
console.log(val2 * val1);
console.log(val3 / 3);
console.log(val3 % 3);
console.log(val2 % 3);
console.log(val1 % 3);

let val = 1;
if (val) {
  console.log('was true');
}
if (!val) {
  console.log('it\'s False');
}*/

/*let value = prompt('what number?');

value = Number(value);
let num = 100;
let message = "nothing";
if (value > num) {
  message = `${value} was greater than ${num}`;
}
else if (value == num) {
  message = `${value} was equal to ${num}`;
}
else {
  message = `${value} is less than ${num}`;
}
document.getElementById('message').innerHTML = message;*/


 function add (numEnt) {
    //console.log(numEnt);
    document.getElementById('numTo').innerHTML = numEnt;
  }


    /*let val = add(Number);
    val = Number(val);
    let num = 100;
    let message = "nothing";

    if (val > num ) {
        message = `${val} was greater to ${num}`;
    } 
    else if (val == num) {
        message = `${val} was equal to ${num}`;
      }
      else {
        message = `${val} is less than ${num}`;
      }



document.getElementById('numTo').innerHTML = message;*/

age = 8;


let message;
if (age >= 21) {
  message = `You are ${age} and allowed to come in and drink.`;
}
else if (age >= 18) {
  message = `You are ${age} and allowed to come in but NOT drink.`;
}
else {
  message = `Go home!! You are only ${age}`;
}
document.getElementById('message1').innerHTML = message;

let val = 50;
let message3;

if ( val > 100) {
  message3 = `${val} was greater than 100`;
} else {
  message3 = `${val} was LESS than or Equal to 100`;
}


/*let message = (val > 100) ? `${val} was greater than 100` : `${val} was LESS or Equal to 100`;*/
document.getElementById('message2').innerHTML = message3;


/*let check = (val % 2) ? `Odd` : `Even`;
check = `${val} is ${check}`;*/

let a = 5;
let b = 10;
let c = 20;
let d = 30;

console.log(a > b || b > a);
console.log(a > b && b > a);
console.log(d > b || b > a);
console.log(d > b && b > a);

let today = 2;
today = Number(today);
let output;
switch (today) {
case 0:
  output = "Sunday";
  break;
case 1:
  output = "Monday";
  break;
case 2:
  output = "Tuesday";
  break;
  default:
    output = "Not found";
  }

document.getElementById('message3').innerHTML = `Today is ${output}`;


/* secret number */
let num_sh = 1000;

function test() {
  const secret = 12345;
  return function inner() {
    console.log(`Secret number ${secret}`);
  }
}
const ou = test();
ou();

const secret2 = function (num_sh) {
  const namez = function () {
    return num_sh;
  }
  return namez;
}
let secretVal = secret2('Olga');
console.log(secretVal());
