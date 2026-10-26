// Assignment 5: Function Architecture and Scope


// Task: Define a standard function and an arrow function that accept parameters (e.g., length and width) with default values to calculate the area of a rectangle. 
// Demonstrate function and block scope limits.
// Expected Output:


// Standard Function Area (Default 5x4): 20
// Arrow Function Area (Custom 10x3): 30
// Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)
length=5
width=4
function Area(){
    console.log(`Standard Function Area (Default ${length}x${width}): ${length*width}`)
}
const customArea=(length,width)=>{
    console.log(`Arrow Function Area (Custom ${length}x${width}): ${length*width}`)
}
Area()
customArea(10,3)

function fxn(){
    if(true){
        let a=10
    }
    console.log(a)

}
fxn()