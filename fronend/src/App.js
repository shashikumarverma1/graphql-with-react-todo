
import './App.css';
import { Login } from './components/Login';
import NavBar from './components/NavBar';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/Signup';
import { CreateTodo } from './components/CreateTodo';
import { PageNotFound } from './components/PageNotFound';
import AllTodo from './components/AllTodo';
import { useState } from 'react';
function App() {
  
  return (
   <div style={{ height:'100vh'}}>
     <BrowserRouter >
   <NavBar/>
   <Routes>
   <Route exact path='/CreateTodo' element={<CreateTodo/>}/>
      <Route exact path='/' element={<AllTodo/>}/>
      
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Signup' element={<Signup/>}/>
   
      <Route exact path='/*' element={<PageNotFound/>}/>
      
   </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
