let isOpted = confirm('Do you wish to opt-in in this program?')
if (isOpted) {
  let email = prompt('Enter your email')
  let name = prompt('Enter your name')
  let phoneNum = prompt('Enter your phone number')
  console.log(email + ' - ' + name + ' - ' + phoneNum)
}

let num1 = parseInt(prompt("Enter your number 1"));
let num2 = parseInt(prompt("Enter your number 2"));
if(Number.isInteger(num1) && Number.isInteger(num2))
{
    let Sum = parseInt(num1)+parseInt(num2);
    console.log("Sum is "+Sum);
}
else{
    console.log("Can not add incompatible types");
}