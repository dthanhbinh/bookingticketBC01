import React, { useState } from "react";
//Hook chỉ sử dụng cho rfc (react function component)
export default function UseStateHook() {
  //tuple : mảng hỗn hợp
  let [state, setState] = useState({
    number: 1,
  }); //UseState là hàm trả về 1 mảng gồm 2 giá trị là state và phương thức setState
  //result[0]
  //result[1]newState
  //useState là hàm trả về 1 mảng gồm 2 giá trị là state và phương thức setState
  let [number, setNumber] = useState(0);
  return (
    <div className="container">
      <h1>
        {state.number}-{number}
      </h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setState({
            number: state.number + 1,
          });
          setNumber(number + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
