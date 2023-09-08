import {  gql } from "@apollo/client";
export   const GetAlltodo=gql`
query getAllTodo {
  todo{
    id
  name
}}
`
export   const GetAllUser=gql`
query{
  users{
    id
    Firstname
    lastname
  }
}
}
`