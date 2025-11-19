import { createSlice } from "@reduxjs/toolkit";
import criteria1 from "../../images/criteria1.png";
import criteria2 from "../../images/criteria2.png";
import criteria3 from "../../images/criteria3.png";
import criteria4 from "../../images/criteria4.png";

import { getAnnouncement, addAnnouncement, pushProfile } from "../thunks/thunk";

const servicesInitialState = {
  services: [
    {
      image: criteria1,
      name: "Будинки",
    },
    {
      image: criteria2,
      name: "Студії",
    },
    {
      image: criteria3,
      name: "Квартири",
    },
    {
      image: criteria4,
      name: "Кімнати",
    },
  ],
};

export const servicesSlice = createSlice({
  name: "services",
  initialState: servicesInitialState,
  reducers: {
    addService: (state, action) => {
      state.services = [...state.services, action.payload];
    },
  },
});

export const { addService: addServiceAction } = servicesSlice.actions;
export const servicesReducer = servicesSlice.reducer;

export const announcementSlice = createSlice({
  name: "announcements",
  initialState: {
    announcements: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnnouncement.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAnnouncement.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.announcements = payload;
      })
      .addCase(getAnnouncement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addAnnouncement.fulfilled, (state, { payload }) => {
        state.announcements.push(payload);
      });
  },
});

export const announcementReducer = announcementSlice.reducer;

const profilesInitialState = {
  profile: null,
  isLoading: false,
  error: null,
};

export const profilesSlice = createSlice({
  name: "profiles",
  initialState: profilesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(pushProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(pushProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.profile = payload;
      })
      .addCase(pushProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const profilesReducer = profilesSlice.reducer;