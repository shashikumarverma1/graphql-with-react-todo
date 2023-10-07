import React, { useState } from 'react'
import {  useMutation } from '@apollo/client';
import { FileUpload } from './fetch/Mutation';
export const Career= () => {
  const [file , setFile]=  useState(null)
  const [FileUploadFunc, res] = useMutation(FileUpload);
  const handalSubmit=(e)=>{
    e.preventDefault();
    console.log("file" , file)
    FileUploadFunc({
        variables:file
    })
  }
  return (
  <form onSubmit={handalSubmit}>
    {/* <label>upload</label> */}
 <input type="file" placeholder='upload' 
//  style={{visibility:"hidden"}} 
 onChange={(e)=>setFile(e.target.files[0])}/>
 <button type='submit'>submit</button>
  </form>
  )
}
