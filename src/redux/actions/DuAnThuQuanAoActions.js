import { CHANGE_CLOTHES, CHANGE_TAB } from "../types/DuAnThuQuanAoTypes";

export const changeTabAction = (tabType) => ({
  type: CHANGE_TAB,
  tabType,
});

export const changeClothesAction = (item) => ({
  type: CHANGE_CLOTHES,
  item,
});
