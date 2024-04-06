//pick
interface User {
    name: string,
    email: string,
    empId: number,
    password: string,
    isSkilled: boolean
};

type updateProps = Pick<User, "name" | "empId" | "isSkilled">
type updatePropsOptional = Partial<updateProps>

// const updateUser = (updateProps: updateProps) => {
//     update props
// };
const updateUser = (updateProps: updatePropsOptional) => {
    //update props
};

//partial

