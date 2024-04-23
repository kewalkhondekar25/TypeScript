type Employee = {id: number; name: string; department: string}
type Manager = {id: number; name: string; employees: Employee[]}
type Staff = Employee | Manager;

const alice:Employee = {
    id: 69,
    name: "alice",
    department: "sales"
};
const steve: Employee = {
    id: 69,
    name: "steve",
    department: "hr"
};
const bob: Manager = {
    id: 69,
    name: "bob",
    employees: [alice, steve]
};



const printStafDetails = (staff: Staff): void => {
    if("employees" in staff){
        console.log(`${staff.name} is manager having ${staff.employees.length} employees`);
    }else{
        console.log(`${staff.name} is an emplyee working in ${staff.department}`);
        
    }
};

printStafDetails(alice);
printStafDetails(bob);