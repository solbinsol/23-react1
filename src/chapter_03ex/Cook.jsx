import React from "react";
const Cook=(props) =>{

    return(
    <div>
    <h1>{`이 과자의 이름은 ${props.name}입니다`}</h1>
    <h1>{`이 과자의 가격은 ${props.money}입니다`}</h1>
    </div>
    )
}

export default Cook 