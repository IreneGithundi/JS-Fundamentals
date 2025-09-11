const arg = process.argv;

let square_size = parseInt(process.argv[2]);
const n = square_size;


if (square_size){
    while(square_size > 0){
        let width = 1;
        let square = "";
        
        while (width <= n)
        {
            square += "X";
            width++;
        }
        console.log(square);
        square_size--;
    }
}
else{
    console.log("Missing size");
}