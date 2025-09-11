const argument = process.argv;

let num_argument = (process.argv.length - 2);

if (num_argument === 0){
    console.log('No argument');
}
else if (num_argument === 1){
    console.log('Argument found');
}
else{
    console.log('Arguments found');
}



