import React from "react";
import { navPills, tabPanes } from "../Data/Data.json";
import Item from "./Item";
export default function TabPanes() {
  const renderItems = () => {
    return tabPanes.map((item, index) => {
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
        <div className="tab-pane container fade" id="tabBotClothes">
          tabBotClothes
        </div>
        <div className="tab-pane container fade" id="tabShoes">
          tabShoes
        </div>
        <div className="tab-pane container fade" id="tabHandBags">
          tabHandBags
        </div>
        <div className="tab-pane container fade" id="tabNecklaces">
          tabNecklaces
        </div>
        <div className="tab-pane container fade" id="tabHairStyle">
          tabHairStyle
        </div>
        <div className="tab-pane container fade" id="tabBackground">
          tabBackground
        </div>
      </div>
    </div>
  );
}
