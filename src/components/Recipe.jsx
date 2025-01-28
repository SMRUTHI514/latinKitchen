import React,{useEffect,useState} from 'react'
import Edit from './Edit'
import { getRecipesApi,deleteRecipeApi } from '../services/allApis'

function Recipe({success}) {
    const [recipelist,setRecipeList]=useState([])
    const [editRes,setEditRes]=useState("")

    useEffect(()=>{
        getData()
    },[success,editRes])


    const getData=async()=>{
        const result=await getRecipesApi()
        console.log(result)
        if(result.status===200){
            setRecipeList(result.data)
        }
    }
    const deleteRecipe=async(id)=>{
        const result=await deleteRecipeApi(id)
        console.log(result)
        if(result.status==200){
            getData()
        }
        else{
            alert("something went wrong!!")
        }
    }
  return (
    <>
    {
        recipelist.length>0?
        <table className="table table-bordered border-7 shadow border-dark">
        <thead>
            <tr>
                <th>RECIPE NAME</th>
                <th>INGREDIENTS</th>
                <th>IMAGE</th>
            </tr>
        </thead>
        <tbody>
            {
                recipelist.map(item=>(
                    <tr>
                <td>{item.name}</td>
                <td>{item.ingredients}</td>
                <td>
                    <img src={item.image} height={'300px'} alt="" />
                </td>
                <td>
                    <Edit recipe={item} edit={setEditRes}/>
                    <button onClick={()=>{deleteRecipe(item.id)}} className="btn btn-danger">Delete Recipe</button>
                </td>
            </tr>

                ))
            }
            
        </tbody>
    </table>
    :
    <h3 className='my-5 text-center text-danger'>No Recipes added yet!!</h3>
    }
    
    </>
  )
}

export default Recipe