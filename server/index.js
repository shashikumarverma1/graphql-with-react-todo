import {ApolloServer,gql} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
const users=[{"id":1,'Firstname':'shashi', 'lastname':'kumar' ,'email':'shashikumarverma@gmail.com' , 'password':'123456' , }]
const quote1=[]
const signup=[]
const typeDefs = gql`
   type Query{
       greet:String
       users:[User]
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
   }
 
`;

const resolvers = {
    Query:{
        greet:()=>{
            return "Hello world"
        },
        users:()=>{
            return users
        }
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


