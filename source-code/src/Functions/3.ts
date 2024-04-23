//optional parameter

const calculatePrice = (price: number, discount?: number) => {
    return price - (discount || 0);
}

calculatePrice(69, 69);