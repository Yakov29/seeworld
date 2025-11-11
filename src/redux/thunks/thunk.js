import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAnnouncementAPI } from "../../api/getAnnouncementAPI";
import { addAnnouncementAPI } from "../../api/addAnnouncementAPI";

export const getAnnouncement = createAsyncThunk("announcements/getAnnouncements", () => getAnnouncementAPI());

export const addAnnouncement = createAsyncThunk("announcements/addAnnouncement", async (announcementData) => {
  const response = await addAnnouncementAPI(announcementData);
  return response;
});
