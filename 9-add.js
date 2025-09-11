function add(a, b){
    return ((a + b));
}
const arg = process.argv;

let arg1 = parseInt(process.argv[2]);
let arg2 = parseInt(process.argv[3]);

console.log(add(arg1, arg2));