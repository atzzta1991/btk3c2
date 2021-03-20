import React from "react";

export default function Item(props) {
  const { item } = props;

  return (
    <div className="card text-center">
      <img src={item.imgSrc_jpg} alt={item.name} />
      <h4>
        <b>{item.name}</b>
      </h4>
      <button>Thử đồ</button>
    </div>
  );
}
