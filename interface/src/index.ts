// const isLegal = (user: {
//     name: string,
//     email: string,
//     age: number
// }) => {
//     if (user.age > 18){
//         return true
//     } else {
//         return false
//     }
// };
// const result = isLegal({
//     name: "john",
//     email: "john@gmail.com",
//     age: 20
// });
// console.log(result);

//using interface
interface User {
    name: string,
    email: string,
    age: number,
};

const isLegal = (user: User) => {
    if(user.age > 18){
        return true;
    } else {
        return false;
    }
};

const greet = (user: User) => {
    console.log(`Hello ${user.name} you are ${user.age} years old`);
    
}

const result = isLegal({
    name: "john",
    email: "john@gmail.com",
    age: 20
});
console.log(result);

greet({
    name: "john",
    email: "john@gmail.com",
    age: 20
});
