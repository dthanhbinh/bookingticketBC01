import axios from "axios";

export const LayDanhSachPhimAction = () => {
  return async (dispatch) => {
    //Gọi action loading
    dispatch({
      type: "openLoading",
    });
    setTimeout(async () => {
      const result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      //Sau khi lấy dũ liệu từ api về sử dụng thì hàm dispatch của redux thunk để đưa dữ liệu lên server
      dispatch({
        type: "LAY_DANH_SACH_PHIM",
        mangPhim: result.data,
      });
      dispatch({
        type: "closeLoading",
      });
    }, 1000);
  };
};

//Lấy thông tin phim chi tiết

export const layThongTinChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      //Sau khi lấy dữ liệu từ api chúng ta sẽ đưa dữ liệu lên reducer = dispatch
      dispatch({
        type: "LAY_CHI_TIET_PHIM",
        chiTietPhim: result.data,
      });
    } catch (errors) {}
  };
};
