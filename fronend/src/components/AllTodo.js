import React ,{useState} from "react";
import { useQuery  } from "@apollo/client";
import { GetAlltodo , GetAllTodo } from "./fetch/Query";
import {  useMutation } from '@apollo/client';
// import { deletetodo  } from "./fetch/Mutation";
import { UpdateTodo, DeleteTodoval } from "./fetch/Mutation";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const AllTodo = () => {
  const [showmodal, setshowmodal] = useState(false)
  const { loading, error, data } = useQuery(GetAllTodo);
  // const [createTodo, res] = useMutation(deletetodo);
  const [updateToDo, res] = useMutation(UpdateTodo);
  const [DeleteTodos, res1] = useMutation(DeleteTodoval);
  const [modalinput , setmodalinput]=useState("")
  const [updateval , setupdateval]=useState(null)
  const [message, setmessage] = useState("")
  let token =localStorage.getItem("token")
  const navigate=useNavigate()

  if(loading){
    return (
      <h1 style={{textAlign:"center" , marginTop:"10vh"}}>Loading........</h1>
    )
  }
 if(res.loading){
  return (
    <h1>wait............</h1>
  )
 }

  const handalupdate=()=>{
    console.log(updateval , modalinput)
   if(token){
    updateToDo({
      variables :{
        "PreTodo": updateval,
        "UpdatedTodo": modalinput
      },
      refetchQueries:[{query : GetAllTodo}]
    })
    setshowmodal(false)
  //  alert( res1?.data?.UpdateTodo )
   }else{
    alert("Please Login")
   }
  }
  const DeleteTodo=(e)=>{
    console.log(e)
    
   if(token){
    DeleteTodos({
      variables :{
        "TodoValue": e
      },
      refetchQueries:[{query : GetAllTodo}]
    })
  
   }else{
    alert("Please Login")
   }
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 1 }}>
  
      <div className="w-full  p-5">
       
        {
          showmodal ? <div style={{width:"20vw" ,hieght:"20vh" ,marginLeft:"35vw"}}>
         <div className="flex p-2">
         <input type ="text" placeholder="  write" className="mx-2 border rounded "  
         onChange={(e)=>setmodalinput(e.target.value)}/>
         <button className="border rounded p-1 w-40 bg-blue-600"  onClick={handalupdate}>update</button>
         </div>

          </div> :null
        }
       <div style={{display:'flex'  ,justifyContent:'center'}}>
       <button className="bg-red-500 p-2" onClick={()=>navigate('/createtodo')}>CreateTodo</button>
       </div>
        {data?.Todos.map((e, i) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }} key={i}>
               <div  style={{ display: "flex", justifyContent: "space-between", width:"60vw" }} >
                <div className="flex  w-4/6 bg-red-100">
                  <b className="mx-5 p-2 m-2">{i + 1}.</b>
                  <p className="mx-5 p-2 m-2 break-words w-2/3" > {e}</p>
                </div>
                <div className="  w-2/6 bg-red-100 flex">
                  <button className="mx-5 p-2 rounded bg-blue-500 m-2 w-24" onClick={()=>{
                    setupdateval(e)
                    setshowmodal(true)
                    // console.log(e)
                    }}>
                    update
                  </button>
               
                  <button className="mx-5 p-2 bg-red-500 m-2 rounded text-white w-24" onClick={()=>DeleteTodo(e)}>
                    
                     Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTodo;
