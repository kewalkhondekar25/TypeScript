const url = "https://fakestoreapi.com/products"

const fetchData = async (url: string): Promise<void> => {
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        };
        const data = await response.json();
        console.log(data);
    } catch (error) {
        const errorMsg = error instanceof Error? error.message : "there is an error"
        console.log(errorMsg);
    }
};

fetchData(url);