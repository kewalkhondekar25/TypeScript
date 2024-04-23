//unction with return type void

const createStudent = (student: {id: number; name: string}): void => {
    console.log(`${student.name} & ${student.id}`);
};
createStudent({
    id: 69,
    name: "john"
})