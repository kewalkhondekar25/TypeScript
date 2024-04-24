// const createString = (arg: string): string  => {
//     return arg.toUpperCase();
// };

// const createNumber = (num: number): number => {
//     return num
// }

const genericFunction = <T>(arg: T): T => {
    return arg;
};

const stringValue = genericFunction<string>("hello world");
const numberValue = genericFunction<number>(69);
const boolenValue = genericFunction<boolean>(true);
