import axios from "axios";
import React, { useState, useEffect } from "react";

//Làm trang chủ tương tự class Home tuy nhiên làm =  fuction component
export default function UseEffectHome() {
  const [arrPhim, setArrPhim] = useState([]); //Tạo ra state cho mảng phim => load ra trang chủ
  const renderFilms = () => {
    return arrPhim.map((film, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <img className="card-img-top" src={film.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{film.tenPhim}</h4>
            </div>
          </div>
        </div>
      );
    });
  };
  //useEffect phải đặt trước return
  //Nhận vào 2 tham số
  //+tham số 1: là hàm chạy sau khi component render
  //+ tham số 2: chứa state khi nào state thay đổi thì tham số 1 sẽ chạy
  //Ghi chú: 1 component có thể gọi nhiều useEffect
  useEffect(() => {
    LayDanhSachPhim();
    return () => {
      //Hàm này sẽ dc kich hoạt khi component mất khỏi giao diện
    };
  }, []);
  const LayDanhSachPhim = async () => {
    try {
      let result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      setArrPhim(result.data);
    } catch (errors) {
      console.log("errors", errors);
    }
  };
  return (
    <div className="container mt-5">
      <button
        onClick={() => {
          LayDanhSachPhim();
        }}
      >
        Lấy danh sách Phim
      </button>
      <div className="display-4 text-center">Danh sách Phim</div>
      <div className="row">{renderFilms()}</div>
    </div>
  );
}
