import React from "react";

export default function Item(props) {
  const { item } = props;
  const itemImg = require(`${item.imgSrc_jpg}`).default;
  return (
    <div className="card text-center">
      <img src={itemImg} alt={item.name} />
      <h4>
        <b>{item.name}</b>
      </h4>
      <button>Thử đồ</button>
    </div>
  );
}
