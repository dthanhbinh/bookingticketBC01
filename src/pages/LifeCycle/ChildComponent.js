import React, { Component, PureComponent } from "react";
//Purecomponent giống component tuy nhiên purecomponent sẽ xét giá trị đàu vào của props có thay đổi hay khôn => nếu có mới render lại
//shouldComponentUpdate không tòn tại trong Purecomponent (vì PureComponent đã xử lí render tự động tương đương vs lifecycle này)
export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor Child");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps Child");
    return currentState;
  }
  //Chạy sau khi state hoặc props của component thay đổi và trước render
  shouldComponentUpdate(newProps, newState) {
    //Xử lý => return false giao diện không render lại, return true giao diện render lại (default)
    return true;
  }
  render() {
    console.log("Render lại rồi nha!");
    return (
      <div>
        <br />
        Props Child: {this.props.stateNumber.number} ChildComponent
      </div>
    );
  }
  //lifecycle dùng để gọi api
  componentDidMount() {
    console.log("componentdidmount Child");
  }
  //componentDidupdate chạy kể từ lần thay đổi props hoặc state, chạy mỗi lần setState hoặc props
  componentDidUpdate(prevProps, prevState) {
    //Hạn chế setState trong component này (muốn setState phải có điều kiện if)
    console.log("componentdidupdate Child");
    this.setInterval(() => {
      console.log("object");
    }, 1000);
  }
  //Lifecycle chạy trước khi component mất khỏi giao diện
  componentWillUnmount() {
    clearInterval(this.setInterval);
  }
}
