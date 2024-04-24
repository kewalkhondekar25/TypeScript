//type - never
// let someValue: never = 69;

type Mode = "dark" | "light";

const getMode = (mode: Mode): void => {
    if(mode === "dark"){
        return;
    };
    if(mode === "light"){
        return;
    }
    //here mode is never type
    mode
}