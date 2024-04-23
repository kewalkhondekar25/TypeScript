//rest params
const sum = (message: string, ...numbers: number[]) => {
    let doubled = numbers.map(item => item * 2);
}

let result = sum("this is message", 1,2,3,4,5)