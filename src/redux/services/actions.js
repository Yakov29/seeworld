// export const addService = (title) => ({
//   type: "addService",
//   payload: {
//     title: title,
//   },
// });

import { createAction } from "@reduxjs/toolkit";

export const addService = createAction("addService", (title) => {
  return {
    payload: {
      title: title,
    },
  };
});
