import { useState } from 'react'
import './App.css'
import Add from './components/Add.jsx'
import Recipe from './components/Recipe'


function App() {
  const [count, setCount] = useState(0)
  const [success,setSuccess]=useState("")

  return (
    <>
    <nav className='navbar navbar-expand navbar-dark sticky-top ' style={{ backgroundColor: '#4d6a85' }} >
        <a href="" className='navbar-brand mt-3 mb-3'>
          {' '}
          <i class="fa-solid fa-kitchen-set text-light"></i>{' '}
          Latin Kitchen
        </a>
      </nav>
      <div className='intro container-fluid'>
        <div className="image-wrapper container-fluid">
        <img src="https://img.freepik.com/free-photo/top-view-tomatoes-with-veggie-leaves_23-2148748867.jpg?t=st=1738055606~exp=1738059206~hmac=53effacd0791dd45f05cb53f4df6a1df8427daa5bfc4251f4bd4a84019de84c5&w=900" alt="" />
        <p className='image-text'>
        Latin cuisine is more than just food—it's a way to connect with family and friends. These recipes are inspired by centuries-old traditions, often shared around lively gatherings. 
        </p>
        </div>

      </div>
     <div className="container-fluid" style={{minHeight:'100vh'}}>
    <Add val={setSuccess}/>
    <Recipe success={success}/>
     </div>
    </>
  )
}

export default App
