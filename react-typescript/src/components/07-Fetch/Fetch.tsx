import React, { useEffect, useState } from 'react'
import { type Products, productSchema } from './index';


const Fetch = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);

  const fetchData = async () => {      
    setIsLoading(true);  
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if(!response.ok){
        throw new Error("Failed to fetch data")
      }
      const rawData: Products[] = await response.json();
      const result = productSchema.array().safeParse(rawData);
      if(!result.data){
        console.log(result.error.message);
        throw new Error("failed to parse")
      }
      setProducts(result.data);
      console.log(result.data);
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