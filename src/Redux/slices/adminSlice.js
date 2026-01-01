import { createSlice } from "@reduxjs/toolkit";
import { postData1 } from "../../APIs";
import {
  currentDate,
  lstformatDate,
  startformatDate,
} from "../../Admin/utils/purefun";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    attendenceList: [],
    updatedAttendList: [],
    assetsList: [],
    complaint: [],
    employeeList: [],
    holidayList: [],
  },
  reducers: {
    setAttendenceList: (state, action) => {
      state.attendenceList = action.payload;
    },
    setUpdatedAttendList: (state, action) => {
      state.updatedAttendList = action.payload;
    },
    setAssetsList: (state, action) => {
      state.assetsList = action.payload;
    },
    setComplaintList: (state, action) => {
      state.complaint = action.payload;
    },
    setEmployeeList: (state, action) => {
      state.employeeList = action.payload;
    },
    setHolidayList: (state, action) => {
      state.holidayList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAttendenceList,
  setUpdatedAttendList,
  setAssetsList,
  setComplaintList,
  setEmployeeList,
  setHolidayList,
} = adminSlice.actions;

export const fetchAttendenceList =
  (date, updateDate, setToggle) => async (dispatch) => {
    let data;
    if (date) {
      data = {
        from_date: startformatDate(),
        to_date: lstformatDate(),
        is_deleted: false,
        employees_data: date,
      };
    } else {
      data = {
        from_date: updateDate?.from_date
          ? updateDate?.from_date
          : startformatDate(),
        to_date: updateDate?.to_date ? updateDate?.to_date : lstformatDate(),
        is_deleted: false,
      };
    }

    try {
      const res = await postData1("api/v1/admin/atten_list/", data, true);
      if (res?.status_code === 200) {
        setToggle(false);
        dispatch(setAttendenceList(res?.data?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const fetchUpdatedList = (fromDate) => async (dispatch) => {
  const data = {
    from_date: fromDate ? fromDate : currentDate(new Date()),
    to_date: fromDate ? fromDate : currentDate(new Date()),
    is_deleted: false,
  };

  try {
    const res = await postData1("api/v1/admin/atten_list/", data, true);
    console.log(res,'tres')
    if (res?.status_code === 200) {
      dispatch(setUpdatedAttendList(res?.data?.data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchAssetsList = () => async (dispatch) => {
  let data = {
    is_deleted: false,
  };
  try {
    const res = await postData1("api/v1/admin/asset_list/", data, true);
   
    if (res?.status_code === 200) {
      dispatch(setAssetsList(res?.data?.data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchComplaintList = () => async (dispatch) => {
  let data = {
    is_deleted: false,
  };
  try {
    const res = await postData1("api/v1/admin/complaint_list/", data, true);
    if (res?.status_code === 200) {
      dispatch(setComplaintList(res?.data?.data));
    }
  } catch (error) {}
};

export const fetchEmployeeList = (exemployee) => async (dispatch) => {
  let data = {};
  if (exemployee) {
    data = {
      is_deleted: exemployee,
    };
  } else {
    data = {
      is_deleted: false,
    };
  }

  try {
    const res = await postData1("api/v1/admin/emp_list/", data, true);
    if (res?.status_code === 200) {
      dispatch(setEmployeeList(res?.data?.data));
    }
  } catch (error) {}
};
export const fetchHolidayList = () => async (dispatch) => {
  let data = {
    is_deleted: false,
  };
  try {
    const res = await postData1("api/v1/admin/list_holidays/", data, true);
    if (res?.status_code === 200) {
      dispatch(setHolidayList(res?.data?.data));
    }
  } catch (error) {}
};

export default adminSlice.reducer;
