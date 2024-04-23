let car: {brand: string; price: number} = {brand: "toyata", price: 699}

car.brand = "bmw";
// car.price = false

let book = {
    title: "tintin",
    cost: 25 
}
let pen = {
    title: "cello",
    cost: 10
}
let notebook = {
    title: "classmate",
}

// let items: {title: string; cost: number}[] = [book, pen, notebook]
let items: {readonly title: string; cost?: number}[] = [book, pen, notebook];
// items[0].title = "asd"


