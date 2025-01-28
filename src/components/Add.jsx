import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addRecipeApi } from '../services/allApis';

function Add({val}) {
    const [show, setShow] = useState(false);
    const[recipe,setRecipe]=useState({
        name:"",ingredients:"",image:""
    })
    const handleSubmit=async()=>{
        console.log(recipe)
        const {name,ingredients,image}=recipe
        if(!name||!ingredients||!image){
            alert("Enter valid inputs!!")
        }
        else{
            const result=await addRecipeApi(recipe)
            console.log(result)
            if(result.status===201){
                alert("Recipe details added!!")
                handleClose()
                setRecipe({name:"",ingredients:"",image:""})
                val(result)
            }
            else{
                alert("Adding Failed...something went wrong")
            }

        }
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button className='addbutton btn my-5 btn-success p-3 shadow' onClick={handleShow}>Add New Recipe</button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Recipe Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{backgroundImage:'https://leaf.nutrisystem.com/wp-content/uploads/2020/05/mexican-recipes-800x533.jpg'}}>
                <input type="text" onChange={(e)=>{setRecipe({...recipe,name:e.target.value})}} placeholder='Enter Recipe Name' className="form-control mb-3" />
                <input type="text" onChange={(e)=>{setRecipe({...recipe,ingredients:e.target.value})}} placeholder='Enter Ingredients' className="form-control mb-3" />
                <input type="text" onChange={(e)=>{setRecipe({...recipe,image:e.target.value})}} placeholder='Enter Image url' className="form-control mb-3" />

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add