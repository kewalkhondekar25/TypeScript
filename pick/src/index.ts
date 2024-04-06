interface User {
    name: string,
    email: string,
    empId: number,
    password: string,
    isSkilled: boolean
};

type updateProps = Pick<User, "name" | "empId" | "isSkilled">

const updateUser = (updateProps: updateProps) => {
    //update props
};

