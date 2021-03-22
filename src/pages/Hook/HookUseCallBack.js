import React, { useState, memo, useCallback } from "react";
import Comment from "./Comment";
//Data tĩnh không thay đổi dữ liệu thì để bên ngoài
export default function HookUseCallBack() {
  let [like, setLike] = useState(1);
  let renderNotify = () => {
    return `Bạn đã thả ${like} ♥ !`;
  };
  const callbackRenderNotify = useCallback(renderNotify, [like]); //
  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment like={like} renderNotify={callbackRenderNotify} />
    </div>
  );
}
