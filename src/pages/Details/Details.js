import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietPhimAction } from "../../redux/action/PhimAction";
export default function Details(props) {
  console.log(props);
  //Giống this.props
  const { chiTietPhim } = useSelector((state) => state.PhimReducer);
  //Tự gọi api khi trang vừa load
  const dispatch = useDispatch();
  useEffect(() => {
    //lấy tham số từ url
    let { id } = props.match.params;
    //Gọi action truyển vào id phim
    dispatch(layThongTinChiTietPhimAction(id));
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <img
            src={chiTietPhim.hinhAnh}
            alt={chiTietPhim.tenPhim}
            className="w-100"
          />
        </div>
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th>Tên Phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>Mô tả</th>
                <th>{chiTietPhim.moTa}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
