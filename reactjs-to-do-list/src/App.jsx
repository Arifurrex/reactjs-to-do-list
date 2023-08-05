import React, { useState } from "react";
import Inputt from "./components/Inputt";
import Box from "./components/Box";

function App() {
  const [currentStateTodo,updateStateTodo] = useState([]);

  const removeTodo = (id) =>{
    console.log(id)

    const newTodo = currentStateTodo.filter(
      (d,index)=>{
         if(index !== id){
           return true;
         }else{
          return false;
         }
      }
    )
    updateStateTodo(newTodo);
  }

// there is no data in currentStateTodo . i will use updateStateTodo for data
const AddTodohandler = (items)=>{
  //  console.log(items)
  updateStateTodo(
    [... currentStateTodo,
    {
      items,
      time: new Date().toLocaleTimeString()
    }]
  )
}

  return (
    <div className="bg-slate-600 h-screen p-5">
      <div className="bg-white h-[50%] w-[50%] shadow rounded-md mx-auto">
        <Inputt handler={AddTodohandler} />
        <Box data={currentStateTodo} removeHandler = {removeTodo}/>
      </div>
    </div>
  );
}

export default App;
