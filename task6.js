// Assignment 6: Arrays, Objects, and Core Methods


// Task: Create an array of product objects (with name and price properties).
//  Use forEach() to print each product,
//  filter() to find items under a certain price, and 
// map() to create an array of formatted name-price strings.
// Expected Output:


// -- All Products (forEach) --
// Item: Laptop - Price: $800
// Item: Mouse - Price: $25
// Item: Keyboard - Price: $45

// -- Filtered Products (Price < $50) --
// [ { name: 'Mouse', price: 25 }, { name: 'Keyboard', price: 45 } ]

// -- Mapped Product Tags (map) --
// [ "LAPTOP costs $800", "MOUSE costs $25", "KEYBOARD costs $45" ]

const products = [
    { name: "Laptop", price: 55000 },
    { name: "Smartphone", price: 25000 },
    { name: "Headphones", price: 2000 },
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "Monitor", price: 12000 },
    { name: "Smart Watch", price: 5000 },
    { name: "Tablet", price: 18000 }
];

console.log('-- All Products (forEach) --');
products.forEach(p=>{
     console.log(`Item: ${p.name} - Price: $${p.price}`);
    // console.log(p.name," price is ",p.price);

});
console.log('-- Filtered Products (Price < $50) --');
let filt=products.filter(p=>p.price>2000);
console.log(filt);
console.log('-- Mapped Product Tags (map) --')
let mp=products.map(p=> p.name+" costs $"+p.price);
console.log(mp)