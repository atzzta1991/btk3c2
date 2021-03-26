import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navPills } from "../Data/Data.json";
import { changeTabAction } from "../redux/actions/DuAnThuQuanAoActions";

export default function NavigationBar() {
  const { activeTab } = useSelector((state) => state.DuAnThuQuanAoReducer);
  const dispatch = useDispatch();

  const handleClick = (type) => {
    dispatch(changeTabAction(type));
  };

  const renderNavItem = () => {
    return navPills.map((navItem, index) => {
      return (
        <li
          className="nav-item"
          key={index}
          onClick={() => {
            handleClick(navItem.type);
          }}
        >
          <a
            className={
              "nav-link btn-default " +
              (navItem.type === activeTab ? "active" : "")
            }
            data-toggle="pill"
            href={"#" + navItem.tabName}
          >
            {navItem.showName}
          </a>
        </li>
      );
    });
  };
  return <ul className="nav nav-pills">{renderNavItem()}</ul>;
}
