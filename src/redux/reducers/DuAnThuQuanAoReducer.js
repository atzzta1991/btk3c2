import { CHANGE_TAB } from "../types/DuAnThuQuanAoTypes";

const initialState = {
  activeTab: "topclothes",
};

export const DuAnThuQuanAoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB: {
      state.activeTab = action.tabType;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
