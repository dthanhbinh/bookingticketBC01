import React, { memo } from "react";
const Comment = (props) => {
  console.log("comment");
  return (
    <div>
      {props.renderNotify()}
      <br />
      <textarea></textarea> <br />
      <button>Gửi</button>
    </div>
  );
};

//Sử dụng memo để bao component lại - sẽ không render lại bởi component cha
export default memo(Comment);
