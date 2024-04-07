interface User {
    name: string,
    email: string,
    empId: number,
    password: string,
    isSkilled: boolean
};

//pick
type updateProps = Pick<User, "name" | "empId" | "isSkilled">
//partial
type updatePropsOptional = Partial<updateProps>

// const updateUser = (updateProps: updateProps) => {
//     update props
// };
const updateUser = (updateProps: updatePropsOptional) => {
    //update props
};


