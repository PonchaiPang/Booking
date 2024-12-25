import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Search() {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();

  return (
    <>
      {/* relative */}
      <div className="container box-position-image">
        <div className="row">
          <div className="col d-flex flex-row-reverse">
            <img
              src="../../image/fujisan_2.jpg"
              className="img-screen"
              alt="Responsive image"
            />
          </div>
        </div>
        {/* absolute */}
        <div className="row box-position-search bg-white p-4 rounded-3 shadow">
          <div className="fs-3">จองโรงแรมในญี่ปุ่น</div>
          <div className="col-4">
            <span className="ps-1">เช็คอิน</span>
            <div className="">
              <DatePicker
                placeholderText="วันที่"
                className="border border-1 rounded-3 p-3"
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
              />
            </div>
          </div>
          <div className="col-4">
            <span className="ps-1 ">เช็คเอ้าท์</span>
            <div className="">
              <DatePicker
                placeholderText="วันที่"
                className="border border-1 rounded-3 p-3"
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
              />
            </div>
          </div>
          <div className="col d-flex align-items-end">
            <button className="buttonStyle" type="button">
              ค้นหา
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
