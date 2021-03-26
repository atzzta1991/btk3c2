import React from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import SexyModel from "./SexyModel";
import TabPanes from "./TabPanes";

export default function DuAnThuQuanAo() {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-7">
            <NavigationBar />
            <TabPanes />
          </div>
          <div className="col-md-5">
            <SexyModel />
          </div>
        </div>
      </div>
    </div>
  );
}
