import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tweetApi from "../../api/requests/tweet";

export const getAllTweets = createAsyncThunk(
  "tweet/getAllTweets",
  async () => {
    try {
      const response = await tweetApi.getTweets();
      return response;
    } catch (error) {
      return error;
    }
  }

);

export const getProfileTweets = createAsyncThunk(
  "tweet/getProfileTweets",
  async (username) => {
    try {
      const response = await tweetApi.getProfileTweets(username);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const getFollowingTweets = createAsyncThunk(
  "tweet/getFollowingTweets",
  async () => {
    try {
      const response = await tweetApi.getFollowingTweets();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getLikeTweet = createAsyncThunk(
  "tweet/getLikeTweet",
  async (userid) => {
    try {
      const response = await tweetApi.getLikeTweet(userid);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const likeTweet = createAsyncThunk(
  "tweet/likeTweet",
  async (tweetId) => {
    try {
      const response = await tweetApi.likeTweet(tweetId);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const newTweet = createAsyncThunk("tweet/newTweet", async (formData) => {
  try {
    const response = await tweetApi.newTweet(formData);
    return response;
  } catch (error) {
    return error;
  }
});

export const newReply = createAsyncThunk(
  "tweet/newReply",
  async (data) => {
    try {
      const response = await tweetApi.commentTweet(data);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const deleteTweet = createAsyncThunk("tweet/deleteTweet", async (id) => {
  try {
    const response = await tweetApi.deleteTweet(id);
    return response;
  } catch (error) {
    return error;
  }
});