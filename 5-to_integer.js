const var1 = process.argv;

let value = parseInt(process.argv[2]);

if(value)
{
    console.log(`My number: ${parseInt(value)}`);
}else{
    console.log('Not a number');
}