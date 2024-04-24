//A type guard is some expression that performs a runtime check that guarantees the type in some scope.

type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33? "hello" : random < 0.66? 123.69 : false;

const checkValue = (value: ValueType): void => {
    if(typeof value === "string"){
        console.log(value.toLowerCase());
        return;
    }
    if(typeof value === "number"){
        console.log(value.toFixed(2));
        return;
    }
    console.log(`boolean: ${value}`);
};

checkValue(value);
