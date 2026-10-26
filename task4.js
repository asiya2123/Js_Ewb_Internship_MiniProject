// Assignment 4: Loop Control Structures


// Task: Write a for loop to print a multiplication table up to 5.
//  Use a while loop with a break statement to find the first number greater than 10 that is divisible by 6, and
//  a do...while loop that skips numbers using continue.
// Expected Output:


// -- Multiplication Table of 5 --
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25

// -- First number > 10 divisible by 6 --
// Found: 12

for(i=1;i<=5;i++){
    console.log(`${5} x ${i} = ${5*i}`)
}
i=0
firstNum=null
while(true){
    if(i>10 && i%6===0){
        console.log(`First number ${i} > 10 divisible by 6`)
        firstNum=i
        break
    }
    i++;
}
i=0
do{
    if (i!=firstNum){
        i++;
        continue;
    }
    else{
        console.log(`Found: ${firstNum}`)
        i++;
    }
    
    

}while(i<=firstNum);

let j=1;
do {
    continue;
    console.log(j);
} while (j<0);