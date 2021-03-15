import React, { useState } from "react";

export default function BaiTapChonXe() {
  let [img, newImg] = useState(`./img/car/red-car.jpg`);
  const changeColor = (color) => {
    newImg(`./img/car/${color}-car.jpg`);
  };
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <img className="w-100" src={img} />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <button
                  className="btn-danger"
                  onClick={(event) => {
                    changeColor("red");
                  }}
                >
                  Red Car
                </button>
              </div>
              <div className="col-4">
                <button
                  onClick={(event) => {
                    changeColor("silver");
                  }}
                >
                  Silver Car
                </button>
              </div>

              <div className="col-4">
                <button
                  className="btn-dark"
                  onClick={(event) => {
                    changeColor("black");
                  }}
                >
                  Black Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
