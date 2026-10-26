// Assignment 2: Operators, Expressions, and Input Handling


// Task: Use prompt() to capture a user's bill amount and tip percentage. Perform explicit type conversion (e.g., using Number()), compute the total using arithmetic and assignment operators, and log a formatted string.
// Expected Output:


// Subtotal: $100
// Tip Percentage: 15%
// Calculated Tip: $15
// Total Amount to Pay: $115

let subtotal=document.querySelector('.para1');
let PercentageTip=document.querySelector('.para2');
let tipCalculated=document.querySelector('.para3');
let total=document.querySelector('.para4');


userBill=prompt('enter your bill')
let tippercentage=prompt("enter your tip")
let calculatedTip=(tippercentage/100)*userBill
console.log(`Subtotal: $${userBill}`)
console.log(`Tip Percentage: ${tippercentage}%`)
console.log(`Calculated Tip: $${calculatedTip}`)
console.log(`Total Amount to Pay: $${Number(userBill)+Number(calculatedTip)}`)

subtotal.innerHTML=`Subtotal: $${userBill}`;
PercentageTip.innerHTML=`Tip Percentage: ${tippercentage}%`;
tipCalculated.innerHTML=`Calculated Tip: $${calculatedTip}`;
total.innerHTML=`Total Amount to Pay: $${Number(userBill)+Number(calculatedTip)}`;


