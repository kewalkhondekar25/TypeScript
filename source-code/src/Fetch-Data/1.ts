const url = "https://vegan-meals-api.vercel.app/api/v1/meals"

interface Products {
    _id: number;
    category: string;
    title: string;
    description: string;
    price: number;
    __v: number
}

const fetchData = async (url: string): Promise<Products[]> => {
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        };
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        const errorMsg = error instanceof Error? error.message : "there is an error";
        console.log(errorMsg);
        return [];
    }
};

const results = await fetchData(url);
results.map(item => console.log(item.price));

export {results};