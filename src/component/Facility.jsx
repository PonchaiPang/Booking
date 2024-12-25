// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faWifi,
  faWaterLadder,
  faSquareParking,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export default function Facility() {
  const facility_list = [
    {
      id: 1,
      name: "ห้องครัว",
      icon: <FontAwesomeIcon icon={faUtensils} className="fa-2xl" />,
    },
    {
      id: 2,
      name: "WiFi",
      icon: <FontAwesomeIcon icon={faWifi} className="fa-2xl" />,
    },
    {
      id: 3,
      name: "สระว่ายน้ำ",
      icon: <FontAwesomeIcon icon={faWaterLadder} className="fa-2xl" />,
    },
    {
      id: 4,
      name: "จอดรถฟรีบริเวณที่พัก",
      icon: <FontAwesomeIcon icon={faSquareParking} className="fa-2xl" />,
    },
    {
      id: 5,
      name: "เครื่องปรับอากาศ",
      icon: <FontAwesomeIcon icon={faSnowflake} className="fa-2xl" />,
    },
  ];
  return (
    <>
      <div className="container row">
        {facility_list?.map((x) => (
          <div
            className="p-4 bg-white border rounded-4 m-2 shadow col"
            key={x.id}
          >
            <span>{x.icon}</span>
            <div className="mt-3">{x.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
