import React from "react";
import { useDispatch } from "react-redux";
import { changeClothesAction } from "../redux/actions/DuAnThuQuanAoActions";

export default function Item(props) {
  const { item } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeClothesAction(item));
  };

  return (
    <div className="card text-center">
      <img src={item.imgSrc_jpg} alt={item.name} />
      <h4>
        <b>{item.name}</b>
      </h4>
      <button onClick={handleClick}>Thử đồ</button>
    </div>
  );
}
