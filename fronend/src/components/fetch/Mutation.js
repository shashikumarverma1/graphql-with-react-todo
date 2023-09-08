import {  gql } from "@apollo/client";
export const createNewTodo=gql`
mutation createNewTodo($Todo:String!){
  createTodo(Todo:$Todo)
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
mutation signup($Firstname:String ,$lastname : String ,$email:String ,$password:String ){
  signup(Firstname:$Firstname , lastname:$lastname ,email:$email , password:$password)
  }
`
export const GetAllTodo=gql`
query{
  Todos
}
`