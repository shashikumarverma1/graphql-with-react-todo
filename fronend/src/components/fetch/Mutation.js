import {  gql } from "@apollo/client";
export const createNewTodo=gql`
mutation createNewTodo($name:String!){
  createTodo(name:$name){
    name
  }
}
`
export const deletetodo = gql`
mutation deletetodo($id:String){
  deletetodo(id:$id)
}
`
export const update=gql`
mutation update($id:String , $name:String){
  updateuser(id:$id , name:$name)
}
`
export const Loginuser=gql`
mutation Loginuser($email:String ,$password:String ){
  Loginuser(email:$email , password:$password  )
}
`
export const signup=gql`
mutation signup($firstName:String ,$lastName : String ,$email:String ,$password:String ){
  Signupuser(firstName:$firstName , lastName:$lastName ,
    email:$email , password:$password)
}
`