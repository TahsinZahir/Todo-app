import { useState } from "react";
function AddTodo({ addTodos }){
    const [todoText,setTodoText]=useState('');
    const handleSubmit = () => {
      if (!todoText.trim()) {
        alert("Todo cannot be empty 😔");
        return;
      }
      addTodos(todoText);
      setTodoText("");
    };
return(
    <>
    <input 
    type="text" className="w-3/4 border rounded-md px-3 py-2 text-lg placeholder:text-lg"
    placeholder="Add your todo............" 
    onChange={(e)=>setTodoText(e.target.value)}
    value={todoText}
    />
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  onClick={handleSubmit}
>
  Submit
</button>

    </>
)
}
export default AddTodo;