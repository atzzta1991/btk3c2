import { CHANGE_TAB } from "../types/DuAnThuQuanAoTypes";

export const changeTabAction = (tabType) => ({
  type: CHANGE_TAB,
  tabType,
});
