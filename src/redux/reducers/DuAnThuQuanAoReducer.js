import { CHANGE_CLOTHES, CHANGE_TAB } from "../types/DuAnThuQuanAoTypes";

const initialState = {
  activeTab: "topclothes",
  modelPanel: [
    { type: "topclothes", imgSrc: "./assets/images/clothes/topcloth5.png" },
    { type: "botclothes", imgSrc: "./../assets/images/clothes/botcloth4.png" },
    { type: "shoes", imgSrc: "./../assets/images/shoes/shoes2.png" },
    { type: "handbags", imgSrc: "./../assets/images/handbags/handbag2.png" },
    { type: "necklaces", imgSrc: "./assets/images/necklaces/necklace3.png" },
    { type: "hairstyle", imgSrc: "./assets/images/hairstyle/hairstyle3.png" },
    {
      type: "background",
      imgSrc: "./../assets/images/background/background1.jpg",
    },
  ],
};

export const DuAnThuQuanAoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB: {
      state.activeTab = action.tabType;
      return { ...state };
    }
    case CHANGE_CLOTHES: {
      const modelPanelUpdate = [...state.modelPanel];
      const index = modelPanelUpdate.findIndex(
        (itemModel) => itemModel.type === action.item.type
      );
      console.log(index);
      if (index !== -1) {
        modelPanelUpdate[index].imgSrc = action.item.imgSrc_png;
      }

      state.modelPanel = modelPanelUpdate;
      console.log(state.modelPanel);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
