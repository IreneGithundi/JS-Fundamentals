const argument = process.argv;

let arg = process.argv[2];

if(arg){
    console.log(arg);
}
else{
    console.log('No argument');
}