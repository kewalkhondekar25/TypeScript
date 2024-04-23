//interface
interface Copy {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    printAuthor(): void;
    printTitle(message: string): string;
    printSomething: (someValue: number) => number
}

const atomicHabit: Copy = {
    isbn: 123,
    title: "automic habit",
    author: "james clear",
    genre: "self help",
    printAuthor(){
        console.log(this.author);
    },
    printTitle(message){
        return `${this.author} ${message}`
    },
    printSomething: (someValue) => {
        return someValue
    }
};

// atomicHabit.isbn = 123;