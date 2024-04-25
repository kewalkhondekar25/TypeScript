import { z } from "zod";

const url = "https://vegan-meals-api.vercel.app/api/v1/meals";

const productSchema = z.object({
    _id: z.number(),
    category: z.string(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    __v: z.number()
})

type Products = z.infer<typeof productSchema>

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