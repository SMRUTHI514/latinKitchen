import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateRecipeApi } from '../services/allApis';

function Edit({recipe,edit}) {
      const [show, setShow] = useState(false);
      const[data,setData]=useState({
        name:recipe.name,ingredients:recipe.ingredients,image:recipe.image
      })
      const updateRecipe=async()=>{
        const {name,ingredients,image}=data
        if(!name||!ingredients||!image){
          alert("Enter valid inputs")
        }
        else{
          const result=await updateRecipeApi(recipe.id,data)
          console.log(result)
          if(result.status==200){
            alert("Recipe details updated!!")
            handleClose()
            edit(result)
          }
          else{
            alert("something went wrong!!")
          }

        }
      }
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>
     <button className="btn btn-warning me-5" onClick={handleShow}>Edit Recipe</button>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <input type="text" defaultValue={recipe?.name} onChange={(e)=>{setData({...data,name:e.target.value})}} placeholder='Enter Recipe Name' className="form-control mb-3" />
                <input type="text" defaultValue={recipe?.ingredients} onChange={(e)=>{setData({...data,ingredients:e.target.value})}} placeholder='Enter Ingredients' className="form-control mb-3" />
                <input type="text" defaultValue={recipe?.image} onChange={(e)=>{setData({...data,image:e.target.value})}} placeholder='Enter Image url' className="form-control mb-3" />

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={updateRecipe}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Edit