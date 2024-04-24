//multiple variable types using generics

const createMultipleArray = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2];
};

createMultipleArray<number, string>(69, "hello");
