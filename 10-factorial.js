function recursive_factorial(num){
    let result = 1;

    for (let index = 1; index <= num; index++) {
      result *= index;
    }

    return result;
}

const arguments = process.argv;

let arg = parseInt(process.argv[2]);

console.log(recursive_factorial(arg));