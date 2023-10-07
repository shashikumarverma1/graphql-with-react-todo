import {  gql } from "@apollo/client";
export const createNewTodo=gql`
mutation createNewTodo($Todo:String!){
  createTodo(Todo:$Todo)
}
`
export const deletetodo = gql`
mutation DeleteTodo($DeleteTodo:String){
  DeleteTodo(DeleteTodo:$DeleteTodo)
}
`
<<<<<<< HEAD
export const updateTodo=gql`
mutation updatetodo($PreTodo:String , $UpdatedTodo:String){
  UpdateTodo(PreTodo:$PreTodo , UpdatedTodo:$UpdatedTodo)
=======
export const UpdateTodo=gql`
mutation UpdateTodo($PreTodo:String,$UpdatedTodo:String){
UpdateTodo(PreTodo:$PreTodo,UpdatedTodo:$UpdatedTodo)
>>>>>>> 01f69313d4b74b681d5923f306e74f1c55008e50
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
export const FileUpload=gql`
mutation singleUpload($file:Upload!){
singleUpload(file:$file)
}
`
export const DeleteTodoval=gql`
mutation DeleteTodo($TodoValue:String){
  DeleteTodo(TodoValue:$TodoValue)
  }
  `