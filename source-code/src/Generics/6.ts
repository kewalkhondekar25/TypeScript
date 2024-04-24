//multiple variable types using generics

const createMultipleArray = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2];
};

createMultipleArray<number, string>(69, "hello");

//to constrain - use extend
const processValue = <T extends string | number>(value: T): T => {
    console.log(value);
    return value;
};
processValue("hello");
processValue(69);
// processValue(true);
