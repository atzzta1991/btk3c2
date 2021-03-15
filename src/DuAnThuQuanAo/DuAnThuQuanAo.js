import React from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import SexyModel from "./SexyModel";
import TabPanes from "./TabPanes";

export default function DuAnThuQuanAo() {
  return (
    <div>
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <NavigationBar />
            <TabPanes />
          </div>
          <div className="col-md-4">{/* <SexyModel /> */}</div>
        </div>
      </div>
    </div>
  );
}
