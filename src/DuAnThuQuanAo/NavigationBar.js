import React from "react";

export default function NavigationBar() {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a
          className="nav-link active  btn-default"
          data-toggle="pill"
          href="#tabTopClothes"
        >
          Áo
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link  btn-default"
          data-toggle="pill"
          href="#tabBotClothes"
        >
          Quần
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#tabShoes">
          Giày dép
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#tabHandBags">
          Túi xách
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#tabNecklaces">
          Dây chuyền
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#tabHairStyle">
          Kiểu tóc
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#tabBackground">
          Nền
        </a>
      </li>
    </ul>
  );
}
