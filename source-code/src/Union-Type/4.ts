let books = ["harry potter", "50 shades", "twilight"];
let foundBook: string | undefined;

for(let book of books){
    if(book === "50 shades"){
        foundBook = book
        break;
    }
};

// foundBook = 69
foundBook?.length;
console.log(foundBook);