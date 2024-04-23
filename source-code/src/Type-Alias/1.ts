// type alias
export type User = {id: number; name: string; isPass: boolean};

const john: User = {
    id: 22,
    name: "john",
    isPass: true
};
const susan: User = {
    id: 69,
    name: "susan",
    isPass: true
};

const showResult = (user: User): User => {
    console.log(`Hi ${user.name} you are ${user.isPass ? "Passed":"Failed"}`);
    return user;
};