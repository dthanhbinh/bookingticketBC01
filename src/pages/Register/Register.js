import React, { Component } from "react";

export default class Register extends Component {
  state = {
    value: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
    error: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    let newValue = { ...this.state.value };
    newValue[name] = value;
    let newError = { ...this.state.error };
    if (value === "") {
      newError[name] = name + "Không được bỏ trống!";
    }
    this.setState(
      {
        value: newValue,
        error: newError,
      },
      () => {
        console.log(this.state);
      }
    );
    // this.setState(
    //   {
    //     [name]: value,
    //   },

    // );
  };
  handleSubmit = (event) => {
    //chặn sự kiện reload
    event.preventDefault();
    let valid = true;
    //Lỗi khi valid khong hợp lệ
    // +khi bất kì thuộc tính nào của error != '' => bị lỗi
    for (let keyError in this.state.error) {
      if (this.state.error[keyError] !== "") {
        valid = false;
      }
    }
    //Hoặc bất kì thuộc tính nào value == '' => bị lỗi
    for (let keyValue in this.state.value) {
      if (this.state.value[keyValue] == "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("Dữ liệu không hợp lệ");
      return;
    }
  };
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <div className="display-4">Đăng Ký</div>
        <div className="form-group">
          <p>Tài Khoản</p>
          <input
            name="taiKhoan"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.error.taiKhoan}</p>
        </div>
        <div className="form-group">
          <p>Họ tên</p>
          <input
            name="hoTen"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.error.hoTen}</p>
        </div>
        <div className="form-group">
          <p>Mật Khẩu</p>
          <input
            name="matKhau"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.error.matKhau}</p>
        </div>
        <div className="form-group">
          <p>Email</p>
          <input
            name="email"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.error.email}</p>
        </div>
        <div className="form-group">
          <p>Số điện thoại</p>
          <input
            name="soDienThoai"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.error.soDienThoai}</p>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Đăng ký
          </button>
        </div>
      </form>
    );
  }
}
