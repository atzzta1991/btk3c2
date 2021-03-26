import React from "react";
import { useSelector } from "react-redux";

export default function SexyModel() {
  const { modelPanel } = useSelector((state) => state.DuAnThuQuanAoReducer);

  return (
    <div className="contain">
      <div className="body" />
      <div className="model" />
      <div
        className="hairstyle"
        style={{
          background: `url(${modelPanel[5].imgSrc})`,
        }}
      />
      <div
        className="necklace"
        style={{
          background: `url(${modelPanel[4].imgSrc})`,
        }}
      />
      <div
        className="bikinitop"
        style={{
          width: 500,
          height: 500,
          background: `url(${modelPanel[0].imgSrc})`,
          position: "absolute",
          top: "-9%",
          left: "-5%",
          zIndex: 3,
          transform: "scale(0.5)",
        }}
      />
      <div
        className="bikinibottom"
        style={{
          width: 500,
          height: 1000,
          background: `url(${modelPanel[1].imgSrc})`,
          position: "absolute",
          top: "-30%",
          left: "-5%",
          zIndex: 2,
          transform: "scale(0.5)",
        }}
      />
      <div
        className="handbag"
        style={{
          background: `url(${modelPanel[3].imgSrc})`,
        }}
      />
      <div
        className="feet"
        style={{
          background: `url(${modelPanel[2].imgSrc})`,
        }}
      />
      <div
        className="background"
        style={{
          backgroundImage: `url(${modelPanel[6].imgSrc})`,
        }}
      />
    </div>
  );
}
