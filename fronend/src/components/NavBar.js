import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate=useNavigate()
  const token =localStorage.getItem("token")
  console.log("tk" ,token)
  const Logout=()=>{
    localStorage.clear()
    navigate('/Login')
  }
  return (
    <div style={{display:"flex" , justifyContent:"space-around" }} className='bg-indigo-500 p-2'>
     <Link to="/" className='mx-2 rounded  text-white p-2 py-1 px-3'>My Todo</Link>
     <div>
     {
            token ? <ul className='flex'> 
            <Link to='/' className='mx-2 rounded bg-black text-white p-2 px-3 rounded' onClick={Logout}>Logout</Link>
              <Link to='/CreateTodo' className='mx-2 rounded bg-black text-white p-2 px-3 rounded'>Create-Todo</Link></ul> 
              :<ul className='flex'>
               <Link to='/login' className='mx-2 rounded bg-black text-white p-2 px-3 rounded ' >Login</Link>
               <Link to='/Signup' className='mx-2 rounded bg-black text-white p-2 px-3 rounded'>Signup</Link>
               </ul>
           }
     </div>
    </div>
  )
}

export default NavBar