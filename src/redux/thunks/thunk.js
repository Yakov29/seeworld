import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAnnouncementAPI } from "../../api/getAnnouncementAPI";
import { addAnnouncementAPI } from "../../api/addAnnouncementAPI";
import pushProfileAPI from "../../api/pushProfileAPI";

export const getAnnouncement = createAsyncThunk("announcements/getAnnouncements", () => getAnnouncementAPI());

export const addAnnouncement = createAsyncThunk("announcements/addAnnouncement", async (announcementData) => {
  const response = await addAnnouncementAPI(announcementData);
  return response;
});


export const pushProfile = createAsyncThunk("profiles/pushProfile", async (profileData) => {
  const response = await pushProfileAPI(profileData)
  return response;
})