import { createReducer, createSlice } from "@reduxjs/toolkit";
import criteria1 from "../../images/criteria1.png";
import criteria2 from "../../images/criteria2.png";
import criteria3 from "../../images/criteria3.png";
import criteria4 from "../../images/criteria4.png";

import { addService } from "./actions";
import { getAnnouncement, addAnnouncement } from "../thunks/thunk";
import { pushProfile } from "../thunks/thunk";

const initialState = {
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
  announcements: [],
  profile: {},
};

// export const servicesReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "addService" :
//         return {
//             ...state,
//             services: [...state.services, action.payload],
//         }
//     }
//     return state
// };

// export const servicesReducer = createReducer(initialState, (builder) => {
//   builder.addCase(addService, (state, action) => {
//     return {
//       ...state,
//       services: [...state.services, action.payload],
//     };
//   });
// });

export const servicesSlice = createSlice({
  name: "services",
  initialState,
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
      });
  },
});

export const announcementReducer = announcementSlice.reducer;

export const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    pushProfile: (state, action) => {
      state.profile = {
        name: action.payload.name,
      };
    },
  },
});
