import { createAction } from "@reduxjs/toolkit";

export const addService = createAction("addService", (title) => {
  return {
    payload: {
      title: title,
    },
  };
});