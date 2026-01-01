import { createSlice } from "@reduxjs/toolkit";
import { postData1 } from "../../APIs";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    holidayList: [],
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setHolidayList: (state, action) => {
      state.holidayList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData, setHolidayList } = userSlice.actions;

export const fetchHolidayList = () => async (dispach) => {
  let data = {
    is_deleted: false,
  };

  const res = await postData1("api/v1/list_holidays/", data, true);
  if (res.status_code === 200) {
    dispach(setHolidayList(res?.data?.data));
  }
};

export default userSlice.reducer;
