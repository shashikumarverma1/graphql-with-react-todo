import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createNewTodo} from './fetch/Mutation'
import { GetAlltodo, GetAllTodo } from './fetch/Query';
import {  useMutation } from '@apollo/client';
// import { useRef } from 'react';
export const CreateTodo = () => {
  const [input, setinput] = useState('')
  const [createTodo, { data, loading, error }] = useMutation(createNewTodo);

  const navigate=useNavigate()
  const createTodo1=(e)=>{
   e.preventDefault()
   console.log(input)
   createTodo({
    variables :{
      Todo:input
    },
    refetchQueries:[{query : GetAllTodo}]
   })
   navigate('/')
  // "Todo": "yws"
  }
  if(loading){
    return (
      <h1 className='text-center'>loading......</h1>
    )
  }
  if(error){
   return <h1>{error}</h1>
  }
  // let ref=useRef()
  return (
   <div style={{display :"flex" ,justifyContent:"center"}}>
     <form className=' w-2/3' onSubmit={(e)=>createTodo1(e)} >
      <input type="text" placeholder="Add Todo" autoFocus
       onChange={(e)=>setinput(e.target.value)} required
       className='p-2 border rounded w-2/3 m-1 text-center' />
      <button type='submit' className='p-2 border rounded  m-1 text-white bg-blue-600'
       >Add Todo</button>
    </form>
   </div>
  )
}
