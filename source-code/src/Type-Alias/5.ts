//intersection in union in type alias

type Book = {
    id: number,
    name: string,
    price: number
}
type DiscountedBook = Book & {discount: number}

const book1: Book = {
    id: 123,
    name: "harry potter",
    price: 25
};
const book2: Book = {
    id: 456,
    name: "ironman",
    price: 35
}
//intersection
const book3: DiscountedBook = {
    id: 789,
    name: "hobit",
    price: 30,
    discount: 0.15
}
// const book3: Book & {discount: number} = {
//     id: 789,
//     name: "hobit",
//     price: 30,
//     discount: 0.15
// }
