import axios from "axios";

// const base_url="http://localhost:3000"
const base_url="https://latinserver.onrender.com"

export const addRecipeApi=async(data)=>{
 return  await axios.post(`${base_url}/recipes`,data)
}

export const getRecipesApi=async()=>{
    return await axios.get(`${base_url}/recipes`)
}

export const deleteRecipeApi=async(id)=>{
    return await axios.delete(`${base_url}/recipes/${id}`)

}

export const updateRecipeApi=async(id,data)=>{
    return await axios.put(`${base_url}/recipes/${id}`,data)

}