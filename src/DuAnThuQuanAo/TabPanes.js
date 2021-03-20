import React from "react";
import { useSelector } from "react-redux";
import { tabPanes } from "../Data/Data.json";
import Item from "./Item";

export default function TabPanes() {
  const { activeTab } = useSelector((state) => state.DuAnThuQuanAoReducer);
  const renderItems = () => {
    return tabPanes
      .filter((tabPane) => tabPane.type === activeTab)
      .map((item, index) => {
        return (
          <div className="col-md-3" key={index}>
            <Item item={item} />
          </div>
        );
      });
  };

  return (
    <div className="well">
      {/* Tab panes */}
      <div className="tab-content">
        <div className="tab-pane container active" id="tabTopClothes">
          <div className="container">
            <div className="row">{renderItems()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
