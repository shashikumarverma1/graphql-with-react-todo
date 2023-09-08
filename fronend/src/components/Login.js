import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {  useMutation } from '@apollo/client';
import { Loginuser } from './fetch/Mutation';

export const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [Loginuser1, res] = useMutation(Loginuser);
  const navigete=useNavigate()
  const SignIn=(e)=>{
    e.preventDefault()
     console.log(email , password)
    // localStorage.setItem("token", "token");
    // Loginuser1({
    //   variables:{email ,password}
    // })
    setemail("")
    setpassword("")
    // console.log("res" , res.data.Loginuser )
    localStorage.setItem("token" , '12345678')
    navigete("/")
  }
  return (
   <div style={{display:"flex" ,justifyContent:"center" , 
   padding:"10px"  ,marginTop:2}} className='bg-black-100' >
    
    <form onSubmit={(e)=>SignIn(e)} className='mt-5  '>      
      <input type="email" placeholder='email'
       className='rounded w-full text-center  p-2 px-3 m-1 py-2  ' 
       onChange={(e)=>setemail(e.target.value)}
       />
       <input type="password" placeholder='password' 
        className='rounded w-full text-center  p-2 px-3 m-1 py-2 '
        onChange={(e)=>setpassword(e.target.value)}
        />
       <button type='submit' className=' rounded bg-blue-800 w-full text-center text-white p-2 px-3 m-1 py-2'>SignIn</button>
       <Link to='/Signup' className='rounded  w-full text-center text-blue-800 p-2 px-3 m-1 py-2'>Dont have account ? Signup</Link>
    </form>
    </div>
  
  )
}
