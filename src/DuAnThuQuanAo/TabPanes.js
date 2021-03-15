import React from "react";

export default function TabPanes() {
  return (
    <div className="well">
      {/* Tab panes */}
      <div className="tab-content">
        <div className="tab-pane container active" id="tabTopClothes">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card text-center">
                  <img
                    src={
                      require("./../assets/images/clothes/topcloth1_show.jpg")
                        .default
                    }
                    alt=""
                  />
                  <h4>
                    <b>Top Cloth 1</b>
                  </h4>
                  <button>Thử đồ</button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <img
                    src={
                      require("./../assets/images/clothes/topcloth1_show.jpg")
                        .default
                    }
                    alt=""
                  />
                  <h4>
                    <b>Top Cloth 1</b>
                  </h4>
                  <button>Thử đồ</button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <img
                    src={
                      require("./../assets/images/clothes/topcloth1_show.jpg")
                        .default
                    }
                    alt=""
                  />
                  <h4>
                    <b>Top Cloth 1</b>
                  </h4>
                  <button>Thử đồ</button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <img
                    src={
                      require("./../assets/images/clothes/topcloth1_show.jpg")
                        .default
                    }
                    alt=""
                  />
                  <h4>
                    <b>Top Cloth 1</b>
                  </h4>
                  <button>Thử đồ</button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <img
                    src={
                      require("./../assets/images/clothes/topcloth1_show.jpg")
                        .default
                    }
                    alt=""
                  />
                  <h4>
                    <b>Top Cloth 1</b>
                  </h4>
                  <button>Thử đồ</button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center">
                  <img
                    src={
                      require("./../assets/images/clothes/topcloth1_show.jpg")
                        .default
                    }
                    alt=""
                  />
                  <h4>
                    <b>Top Cloth 1</b>
                  </h4>
                  <button>Thử đồ</button>
                </div>
              </div>
            </div>
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
