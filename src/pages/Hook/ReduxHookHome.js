import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { LayDanhSachPhimAction } from "../../redux/action/PhimAction";

export default function ReduxHookHome(props) {
  //useSelector là hook để láy dữ liệu từ reducer về
  const mangPhim = useSelector((state) => state.PhimReducer.mangPhim);
  //use Dispatch tương tự this.props.dispatch
  const dispatch = useDispatch();

  const renderFilms = () => {
    return mangPhim.map((film, index) => {
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
    dispatch(LayDanhSachPhimAction());
    //XOá hàm laydanhsachphim();
    return () => {
      //Hàm này sẽ dc kich hoạt khi component mất khỏi giao diện
    };
  }, []);

  return (
    <div className="container mt-5">
      <button onClick={() => {}}>Lấy danh sách Phim</button>
      <div className="display-4 text-center">Danh sách Phim</div>
      <div className="row">{renderFilms()}</div>
    </div>
  );
}
