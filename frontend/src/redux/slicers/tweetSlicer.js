import { createSlice } from "@reduxjs/toolkit";
import * as action from "../actions/tweetActions";
import toast from "react-hot-toast";
export const tweetSlicer = createSlice({
  name: "tweet",
  initialState: {
    loading: false,
    allTweets: null,
    followingTweets: null,
    profileTweets: null,
    likeTweets: null,
    refresh: false,
    errors: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(action.getAllTweets.pending, (state) => {
        state.loading = true;
      })
      .addCase(action.getAllTweets.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.allTweets = data;
        } else {
          state.errors = data;
        }
        state.loading = false;
      })
      .addCase(action.getFollowingTweets.pending, (state) => {
        state.loading = true;
      })
      .addCase(action.getLikeTweet.pending, (state) => {
        state.loading = true;
      })
      .addCase(action.getFollowingTweets.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.followingTweets = data;
        } else {
          state.errors = data;
        }
        state.loading = false;
      })

      .addCase(action.getLikeTweet.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.likeTweets = data
        } else {
          state.errors = data;
        }
        state.loading = false;
      })

      .addCase(action.getProfileTweets.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.profileTweets = data
        } else {
          state.errors = data;
        }
        state.loading = false;
      })

      .addCase(action.likeTweet.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          toast.success("you " + data?.message + " post")
          state.refresh = !state.refresh;

        } else {
          state.errors = data;
        }
      })
      .addCase(action.newReply.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.refresh = !state.refresh;
        } else {
          state.errors = data.errors;
        }
      })
      .addCase(action.newTweet.pending, (state) => {
        state.loading = true;
      })
      .addCase(action.newTweet.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.refresh = !state.refresh;
        } else {
          state.errors = data;
        }
        state.loading = false
      })
      .addCase(action.deleteTweet.pending, (state, action) => {
        state.loading = true
      })
      .addCase(action.deleteTweet.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          toast.success(data?.message)
          state.refresh = !state.refresh;
        } else {
          state.errors = data;
        }
        state.loading = false
      })
  },
});

export default tweetSlicer.reducer;
