import { useState } from "react";
function AddTodo({ addTodos }){
    const [todoText,setTodoText]=useState('');
return(
    <>
    <input 
    placeholder="Add your todo..." 
    onChange={(e)=>setTodoText(e.target.value)}
    value={todoText}
    />
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  onClick={() => {
    console.log('Button clicked');
    addTodos(todoText);
    setTodoText('');
  }}
>
  Submit
</button>

    </>
)
}
export default AddTodo;