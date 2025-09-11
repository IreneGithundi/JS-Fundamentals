const arg = process.argv;

let mult = parseInt(process.argv[2]);
let i = 1;
// let out = "C is fun";

if (mult){
    while (mult >0)
    {
        console.log("C is fun");
        mult--;
    }
} 
else{
console.log("Missing number of occurrences");
}