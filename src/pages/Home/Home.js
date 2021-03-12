import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { LayDanhSachPhimAction } from "../../redux/action/PhimAction";
class Home extends Component {
  // state = {
  //   arrFilms: [],
  // };
  loadFilm = () => {
    this.props.dispatch(LayDanhSachPhimAction());
    // Dùng axios gọi lấy thông tin từ backend
    // const promise = axios({
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    // });
    // //Xử lý thành công
    // promise.then((result) => {
    //   console.log(result.data);
    //   this.props.dispatch({
    //     type: "LAY_DANH_SACH_PHIM",
    //     mangPhim: result.data,
    //   });
    // });
    // promise.catch((error) => {
    //   console.log(error.response.data);
    // });
  };
  renderFilms = () => {
    return this.props.mangPhim.map((film, index) => {
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
  render() {
    return (
      <div className="container">
        Home
        <button
          onClick={() => {
            this.loadFilm();
          }}
        >
          Lấy danh sách phim
        </button>
        <div className="text-center display-4">Danh Sách Phim</div>
        <div className="row">{this.renderFilms()}</div>
      </div>
    );
  }
  //Hàm giống hàm render của react component kế thừa nên có
  // componentDidMount() {
  //   //Các API muốn gọi sau khi giao diện render thì sẽ gọi tròng hàm này
  //   this.loadFilm();
  // }
}
const mapStateToProps = (state) => {
  return {
    mangPhim: state.PhimReducer.mangPhim,
  };
};
export default connect(mapStateToProps)(Home);
