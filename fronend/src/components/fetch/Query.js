import {  gql } from "@apollo/client";
export   const GetAlltodo=gql`
query getAllTodo {
  todo{
    id
  name
}}
`
export const GetAllTodo=gql`
query{
  Todos
}
`