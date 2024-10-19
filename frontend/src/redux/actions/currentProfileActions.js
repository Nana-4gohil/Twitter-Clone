import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../api/requests/auth";
import * as profileApi from "../../api/requests/user";

export const signIn = createAsyncThunk(
  "currentProfile/signIn",
  async ({formData,navigate}) => {
    try {
      const response = await authApi.signin(formData);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const signUp = createAsyncThunk(
  "currentProfile/signUp",
  async ({formData,navigate}) => {
    try {
      const response = await authApi.signup(formData);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const signOut = createAsyncThunk("currentProfile/signOut", async ({navigate}) => {
  try {
    const response = await authApi.signout();
    return response;
  } catch (error) {
    return error;
  }
});

export const getCurrentProfile = createAsyncThunk("currentProfile/getCurrentProfile", async () => {
  try {
    const response = await authApi.getCurrentProfile();
    return response;
  } catch (error) {
    return error;
  }
});

export const followUnfollowUser = createAsyncThunk(
  "currentProfile/followUnfollowUser",
  async (userid) => {
    try {
      const response = await profileApi.followByUserid(userid);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "currentProfile/getUserProfile",
  async (username) => {
    try {
      const response = await profileApi.getProfileByUsername(username);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const editProfile = createAsyncThunk(
  "currentProfile/editProfile",
  async (formData) => {
    try {
      const response = await profileApi.updateProfile(formData);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const suggestedProfile = createAsyncThunk(
  "currentProfile/suggestedProfile",
  async () => {
    try {
      const response = await profileApi.getSuggestedUsers();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getFollowers = createAsyncThunk(
  "currentProfile/getFollowers",
  async (userid) => {
    try {
      const response = await profileApi.getFollowers(userid);
      return response;
    } catch (error) {
      return error;
    }
  }
)

export const getNotifications = createAsyncThunk(
  "currentProfile/getNotifications",
  async () => {
    try {
      const response = await profileApi.getNotifications();
      return response;
    } catch (error) {
      return error;
    }
  }
)
export const deleteNotifications = createAsyncThunk(
  "currentProfile/deleteNotifications",
  async () => {
    try {
      const response = await profileApi.deleteNotifications();
      return response;
    } catch (error) {
      return error;
    }
  }
)





