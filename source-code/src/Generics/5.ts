//create a function that takes leth & values as args & results array accordingly;

const generateStringArray = (length: number, value: string): string[] => {
    let result: string[] = [];
    result = Array(length).fill(value);
    return result;
};

generateStringArray(4, "hello");
//res - ["hello", "hello", "hello", "hello"];


//here <T> is generic variable type
const generateArray = <T>(length: number, value: T): Array<T> => {
    let result: T[] = [];
    result = Array(length).fill(value);
    return result; 
};

let stringArr = generateArray<string>(10, "hello");
let numArr = generateArray<number>(10, 69);

