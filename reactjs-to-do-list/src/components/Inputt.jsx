import React, { useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
function Inputt(props) {
  const inputBox = useRef(); // this is id as like javascript id
  return (
    <div className="p-3 flex justify-between items-center">
      <input
        className="border-slate-300 w-[90%] border p-3 focus:outline-none"
        type="text"
        placeholder="text here"
        ref={inputBox}
      />
      <div onClick={()=>props.handler(inputBox.current.value)} className="bg-red-500 w-[30px] h-[30px] rounded-full  flex justify-center items-center text-white text-5xl cursor-pointer">
        <AiOutlinePlusCircle />
      </div>
    </div>
  
  );
}


export default Inputt;

/* 
here useRef is id as like javascript id . 
const inputBox = useRef();

in input i will set 
ref={inputBox}
so that i will get what i will write in inputBox

finally when i click in button 
onClick={()=>{props.current.value}}

props as like property but little different . props is 
an object . 
props.handler(inputBox.current.value)
*/