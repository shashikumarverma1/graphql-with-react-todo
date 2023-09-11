import {ApolloServer,gql} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
const users=[{"id":1,'Firstname':'shashi', 'lastname':'kumar' ,'email':'shashikumarverma@gmail.com' , 'password':'123456' , }]
const quote1=[]
const signup=[]
const Todos=[]
const typeDefs = gql`
   type Query{
       greet:String
       users:[User]
       Todos:[String]
   }
   type User{
    id:String
    Firstname:String
    lastname:String
    email:String
    password:String
  
   } 

   type Mutation{
    quote(quote:String):String
    signup(Firstname:String , lastname:String , email : String , password:String):String
    createTodo(Todo:String):String
    UpdateTodo(PreTodo:String,UpdatedTodo:String ):String
    DeleteTodo(DeleteTodo:String ):String
   }
 
 
`;


const resolvers = {
    Query:{
        greet:()=>{
            return "Hello world"
        },
        users:()=>{
            return users
        },
        Todos:()=>Todos
    },
    Mutation:{
        quote:(_, {quote })=>{
            let id=quote.length
            quote1.push({   id, quote  })
            console.log(quote , quote1)
            return quote
        },
        signup:(_,{Firstname , lastname , email , password})=>{
            signup.push({
                Firstname , lastname , email ,password
            })
            console.log(signup)
         return 'user cretaed'
        },
        createTodo:(_,{Todo})=>{
            Todos.push(Todo)
            console.log(Todos)
         return 'Todo cretaed'
        },
        UpdateTodo:(_,{PreTodo ,UpdatedTodo })=>{
            for (let i=0 ;  i<Todos.length ; i++){
                if(Todos[i]==PreTodo){
                    Todos[i]= UpdatedTodo
                    break ;
                }
            }
       
         return 'Todo Updated'
        },
        DeleteTodo:(_,{DeleteTodo})=>{
            let deletedval=''
            for (let i=0 ;  i<Todos.length ; i++){
                if(Todos[i]==DeleteTodo){
                    deletedval=Todos[i]
                    Todos.splice(i,1)
                    break ;
                }
            }
          console.log(Todos)
         return  `${deletedval} Todo Deleted`
        }
    }
}


const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


