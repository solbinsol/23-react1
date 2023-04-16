import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
function Counter() {
    let [count, setCount] = useState(0);
    let countRef = useRef(0);
    useEffect(()=>{
        setInterval(() => {
        setCount(countRef.current += 0.5);
        }, 1000)
    },[])
    return (
      <>
        <h1>카운트 : {count}</h1>
       
      </>
    );
  }

  export default Counter