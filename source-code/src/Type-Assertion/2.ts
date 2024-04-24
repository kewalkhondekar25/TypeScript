enum Status {
    Pending = "pending",
    Declined = "declined"
};

type User = {
    name: string;
    status: Status;
}

const statusValue = "pending";

//as - TS assertion
const user: User = {name: "john", status: statusValue as Status}