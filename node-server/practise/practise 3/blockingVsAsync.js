const fs = require("fs")


console.log("1: Script Start");

// Blocking code opration
console.log("2: Reading file Shynchronous");
fs.writeFileSync("fileOne.txt", "Sachin Sehrawat file one")
console.log("3: Shynchronous opration done");

// async or non blocking opration
console.log("4: Reading file Ashynchronous");
fs.writeFile("fileTwo.txt", "Sachin sehrawat file two", (err) => {
  console.log("6: Ashynchronous read completed");  
})

console.log("5: Script end");






