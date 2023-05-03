import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;



function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    //isFull을 setFull로 변경할 수 있게함 isFull상태가 되면 유즈스테이트 코드를 실행하지 않음
    const [count, increaseCount, decreaseCount] = useCounter(0);
    //카운트를 두 함수로 변경 할 수 있게함 시작값은 0

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });
    //변경이 있을떄마다 (버튼을 누를떄마다) 로그 출력
    //수용인원이 가득찼는지
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);
    //변경이 있을떄마다 (버튼을 누를떄마다) 로그 출력
    //현재 몇명이 수용되었는지
    function useCounter(initialValue) {
        const [count, setCount] = useState(initialValue);
        // 카운트라는 변수 선언 후 setCount함수로 값을 변경시킴 즉 (initialValue)에 들어가는 값으로 정의
        const increaseCount = () => setCount((count) => count + 1);
        //카운트를 1증가 시컴
        const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
        //카운트를 1뺌
    
        return [count, increaseCount, decreaseCount];
        //카운트 뒤에 요소들로 카운트 값을 변경시킬 수 있게함
    }

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;