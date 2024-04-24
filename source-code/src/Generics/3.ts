interface genericInterface<T> {
    value: T;
    getValue: () => T;
};

const getString: genericInterface<string> = {
    value: "hello world",
    getValue(){
        return this.value;
    }
};
