import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
function CountDown() {
    let [count, setCount] = useState(100);
    let countRef = useRef(100);
    useEffect(()=>{
      setInterval(() => {
        
        setCount((countRef.current -= 0.5));
      }, 1000);
    },[])
  return (
    <>
      <h1>카운트다운 : {count}</h1>
     
    </>
  );
  }

  export default CountDown