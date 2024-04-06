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
    contactNo?: number  //optional agrument
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
    age: 20,
    contactNo: 9876543210
});

interface Info{
    id: string,
    count: number
};

const sumOfCount = (props1: Info, props2: Info) => {
    return props1.count + props2.count
};

const response = sumOfCount(
    {
        id: "asd23ad",
        count: 1
    },
    {
        id: "e34fsdf",
        count: 68
    }
);
console.log(response);



