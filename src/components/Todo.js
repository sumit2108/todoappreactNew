import React from "react";


function Todo ({text,todo,todos, setTodos}){
    const deleteHandler =()=>{
        setTodos(todos.filter((e1)=>e1.id!==todo.id))
    }
    const completeHandler =()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return{
                    ...item, completed:!item.completed
                }
            }
            return item;
        }))
    }


const editHandler=()=>{
var promptInput =prompt("Enter New Task");

if(promptInput){
setTodos(todos.map((item)=>{
    if(item.id===todo.id){
        return{
            ...item, text:promptInput
        }
    }
    return item;
}))


}

}


    return(
     <div className="todo">
         <li className={`todo-item ${todo.completed?"completed":""}`}>{text}</li>

         <button id={todo.id} onClick={editHandler} className="trash-btn">
         <i className="far fa-edit"></i>
         </button>

         <button onClick={completeHandler}  className="complete-btn">
             {todo.completed?<i class="fa fa-undo"></i>:<i className="fas fa-check"></i>}
         </button>
         <button onClick={deleteHandler} className="trash-btn">
             <i className="fas fa-trash"></i>
         </button>
     </div>
    )
}

export default Todo;