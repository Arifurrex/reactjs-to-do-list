import React, { useState } from "react";
import Items from "./Items";

function Box(props) {
  const items = props.data.map(  
    (singleData,index)=>{
      return <Items  key={index} id={index} items={singleData.items} time={singleData.time} removeHandler={props.removeHandler}/>
    }
  )
  return (
    <div className="p-3">
      {items}
      {/* <Items/>
      <Items/>
      <Items/> */}
    </div>
  );
}

export default Box;
