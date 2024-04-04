"use strict";
//types
const greetings = (name) => {
    console.log(`hello ${name}`);
};
greetings("john");
//type inference
const sum = (a, b) => {
    return a + b;
};
const sumResult = sum(69, 69);
console.log(sumResult);
//verify age
const isAdult = (age) => {
    if (age < 18) {
        return false;
    }
    else {
        return true;
    }
};
const ageResult = isAdult(15);
console.log(ageResult);
//callback fn that runs after 1s
const runAfter1s = (fn) => {
    setTimeout(fn, 1000);
};
runAfter1s(() => console.log("hello"));
const runResult = runAfter1s;
