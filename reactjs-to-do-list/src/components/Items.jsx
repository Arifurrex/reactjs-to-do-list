import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

function Items(props) {
    const [currentState, updateState] = useState(false);
  return (
    <div onClick={()=>{updateState(!currentState)}} className={` select-none cursor-pointer border-b border-slate-200 flex justify-between p-3`}>
       <div className="flex justify-between items-center ">
        <span className="text-slate-400 text-sm">{props.time}</span>
        <span  className={`${currentState == false ?'line-through' : ''} pl-2`} >{props.items}</span>
       </div>
       <div className="text-red-400 " onClick={()=>{props.removeHandler(props.id)}}><MdDeleteOutline/></div>

    </div>
  );
  
}

export default Items