import React, { useRef, useState } from "react";

export default function UseRef(props) {
  let [number, setNumber] = useState(1);
  let messRef = useRef("");
  console.log({ messRef });
  return (
    <div>
      {number}
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
          messRef.current = "dữ liệu đã đc thay đổi";
        }}
      >
        +
      </button>
    </div>
  );
}
