import React, {  useState,useEffect } from 'react';
import './App.css';
import Form from './components/form';
import Todolist from './components/todolist';

function App(){



 const [inputText,setinputText]=useState("");
 const[todos,setTodos]=useState([]);
 const[status,setStatus]=useState("all")
 const[filteredTodos,setFilterTodos]=useState([]);

 //useEffect
 useEffect(()=>{
filterHandler();

 },[todos,status])

 useEffect(()=>{
getLocalTodo();
 },[])

 useEffect(()=>{
  setLocalTodo();
   },[todos])

 //events

 const filterHandler=()=>{
   switch(status){
     case 'completed':
       setFilterTodos(todos.filter((todo)=> todo.completed===true));
         break;
     case 'uncompleted':
       setFilterTodos(todos.filter((todo)=> todo.completed===false));
       break;
       default :
       setFilterTodos(todos)
       break;
   }
 }


 //save to Localstorage

 const setLocalTodo=()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
 };
 const getLocalTodo=()=>{
  if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos',JSON.stringify([]))
  }else{
   let localTodo=JSON.parse(localStorage.getItem('todos'))
   setTodos(localTodo)
  }
}
  return (
    <>
    <header>Sumit's Todo React App </header>
    
    <Form todos={todos} 
    inputText={inputText}
    setTodos={setTodos} 
    setinputText={setinputText}
    setStatus={setStatus}
    status={status} 
    />
   <Todolist 
   todos={todos} 
   inputText={inputText} 
   setTodos={setTodos}
   filteredTodos={filteredTodos}/>
   </>
    
  );
}

export default App;
