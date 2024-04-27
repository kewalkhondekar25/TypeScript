import axios from "axios";
import { z } from "zod";

const url = "https://vegan-meals-api.vercel.app/api/v1/meals"

export const mealSchema = z.object({
  _id: z.string(),
  category: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  __v: z.number()
});

export type Meals = z.infer<typeof mealSchema>;

export const fetchMeals = async (): Promise<Meals[]> => {
  const response = await axios.get<Meals[]>(url);
  const result = mealSchema.array().safeParse(response.data);
  if(!result.success){
    console.log(result.error.message);
    throw new Error("Failed to fetch...")
  }
  console.log(result.data);
  return result.data;
}

fetchMeals();