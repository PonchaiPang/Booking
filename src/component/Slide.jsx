// import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const Arrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "lightgray",
          borderRadius: "50%",
          padding: "2px 0 2px 0",
        }}
        onClick={onClick}
      />
    );
  };

  const listRoom = [
    {
      id: 1,
      name: "ห้องนอนส่วนตัว Taito-ku",
      img: "../../image/japan_room_1.jpg",
      description:
        "ห้องสำหรับครอบครัวในลิตเติ้ลเจแปน (เตียงสองชั้นสำหรับผู้ใหญ่ 4 คน)",
      rating: 4,
    },
    {
      id: 2,
      name: "ห้องพักในโรงแรม Shinogyo Ward",
      img: "../../image/japan_room_2.jpg",
      description: "โมเดิร์นอาร์เอ็มที่มีเน็ตฟลิกซ์แบะสตาร์บัคฟรี",
      rating: 5,
    },
    {
      id: 3,
      name: "ห้องนอนส่วนตัวใน Fujikawaguchiko-machi",
      img: "../../image/japan_room_3.jpg",
      description: "ห้องทาทามิแบบดั้งเดิมใกล้ป้ายรถเมล์และทะเลสาบ",
      rating: 5,
    },
    {
      id: 4,
      name: "ห้องพักในโรงแรมใน Toshima City",
      img: "../../image/japan_room_4.jpg",
      description:
        "เตียงควีนไซส์ทั้งหลังสร้างใหม่/อิเคะบุคุโระเน็ตฟลิกซ์ไม่จำกัด",
      rating: 4,
    },
    {
      id: 5,
      name: "ห้องพักในโรงแรมใน Ito-Shi",
      img: "../../image/japan_room_5.jpg",
      description: "[Hinodeya] Tranditional Inn Tatami Wide Room",
      rating: 5,
    },
    {
      id: 6,
      name: "Grand Opened Luxury Hostel",
      img: "../../image/japan_room_6.jpg",
      description: "B.โรงแรมแคปซูลใหม่ล่าสุด [หญิงเท่านั้น]",
      rating: 4,
    },
    {
      id: 7,
      name: "ห้องในโรงแรม Chikuma-shi",
      img: "../../image/japan_room_7.jpg",
      description:
        "Kamesei Ryokan, ออนเซ็นอินน์ที่เงียบสงบ, ห้องส่วนตัวราคาประหยัด",
      rating: 4,
    },
  ];

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="m-4">
        <div className="fs-3 fw-normal">โรงแรมคะแนนสูงในญี่ปุ่น</div>
        <div className="fs-5 text-secondary">
          ผู้เข้าพักเห็นพ้อง: โรงแรมคอนโดเหล่านี้ได้รับคะแนนสูงด้านที่ตั้ง
          ความสะอาดและอื่นๆ
        </div>

        <div className="m-auto pt-4">
          <div className="mt-20">
            <Slider {...settings}>
              {listRoom.map((x) => (
                <div className="card background-item-card" key={x.id}>
                  <img src={x.img} className="item-img" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{x.name}</h5>
                    <p className="card-text text-secondary item-description">
                      {x.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
