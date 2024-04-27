import React, { useEffect, useState } from 'react'

interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number
  }
}

const Fetch = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Products[]>();

  const fetchData = async () => {      
    setIsLoading(true);  
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if(!response.ok){
        throw new Error("Failed to fetch data")
      }
      const rawData = await response.json();
      setProducts(rawData);
      console.log(rawData);
      } catch (error) {
        const message = error instanceof Error? error.message : "there was an error";
        console.log(message);
        
      } finally {
        setIsLoading(false)
      }
};

useEffect(() => {
  fetchData();
}, [])

    if(isLoading){
        return(
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }

  return (
    <div>
        <h3>Products</h3>
        <div>
          {
            products?.map((item, index) => {
                return(
                    <div key={item.id}>
                        <p>{index + 1}</p>
                        <h3>{item.description}</h3>
                        <h4>{item.price}</h4>
                    </div>
                )
            })
          }
        </div>
    </div>
  )
}

export default Fetch