import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {  useMutation } from '@apollo/client';
import { signup } from './fetch/Mutation';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [Signupuser, res] = useMutation(signup);
  const [firstName, setname] = useState("")
  const [lastName, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate=useNavigate()
  const SignUp=(e)=>{
    e.preventDefault()
    //  console.log({firstName,lastName,email , password})
     Signupuser({
      variables:{firstName,lastName,email , password}
     })
     navigate('/login')
  }
  return (
    <div style={{display:"flex" ,justifyContent:"center" , 
    padding:"10px" ,marginTop:2}}>
        <form onSubmit={(e)=>SignUp(e)} className='mt-5  w-2/5'>  
        <input type="text" placeholder='first name'required 
         className=' rounded w-full text-center  p-2 px-3 m-1 py-2 bg-blue-50 '
         onChange={(e)=>setname(e.target.value)}
         />
        <input type="text" placeholder='last name' required  onChange={(e)=>setlastname(e.target.value)} className='rounded w-full text-center  p-2 px-3 m-1 py-2 bg-blue-50'/>    
      <input type="email" placeholder='email' required onChange={(e)=>setemail(e.target.value)} className='rounded w-full text-center  p-2 px-3 m-1 py-2  '/>
       <input type="password" placeholder='password' required onChange={(e)=>setpassword(e.target.value)} className='rounded w-full text-center  p-2 px-3 m-1 py-2 '/>
       <button type='submit' required className=' rounded bg-blue-800 w-full text-center text-white p-2 px-3 m-1 py-2'>Signup</button>
       <Link to='/Login' className='rounded  w-full text-center text-blue-800 p-2 px-3 m-1 py-2'>Already have account ? SignIn</Link>
    </form>
    </div>
  )
}

export default Signup