//type - unknow

let unknownValue: unknown;

unknownValue = "hello world";
unknownValue = [1, 2, 3];
unknownValue = false;

//type -unknown
if(typeof unknownValue === "number"){
    unknownValue.toFixed(2)
}

//error
try {
    //fetch
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
}