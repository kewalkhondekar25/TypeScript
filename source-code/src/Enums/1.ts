//enums allows us to define a set of name constant
enum ServerResponseStatus {
    Success,
    Error
};

interface ServerResponse {
    result: ServerResponseStatus,
    date: string[]
};

const getSErverResponse = (): ServerResponse => {
    return {
        result: ServerResponseStatus.Success,
        date: ["sixty", "nine"]
    }
};