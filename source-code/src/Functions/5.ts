//object as a params

const createEmployee = ({id}: {id: number}): {id: number, isEmpoyee: boolean} => {
    return {id, isEmpoyee: id % 2 === 0}
};

const msg = createEmployee({id: 1})