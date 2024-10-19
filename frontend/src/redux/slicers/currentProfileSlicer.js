import { createSlice } from "@reduxjs/toolkit";
import * as action from "../actions/currentProfileActions";
import toast from "react-hot-toast";
export const currentProfileSlicer = createSlice({
  name: "currentProfile",
  initialState: {
    data: null,
    following: null,
    suggestedUsers: null,
    notifications: null,
    authUser: null,
    loading: false,
    errors: null,
    refresh: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(action.signUp.pending, (state) => {
        state.loading = true;
        state.errors = null; // Optionally reset errors
      })
      .addCase(action.signIn.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(action.getCurrentProfile.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(action.editProfile.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(action.followUnfollowUser.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(action.getUserProfile.pending, (state, action) => {

        state.loading = true;
        state.errors = null;
      })
      .addCase(action.suggestedProfile.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(action.signUp.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        const { navigate } = action.meta.arg;
        if (status === 200) {
          state.data = data;
          navigate("/login")
        } else {
          toast.error(data.error)

        }
        state.loading = false;
      })

      .addCase(action.signIn.fulfilled,  (state, action) => {
        const { status, data } = action.payload;
        const { navigate } = action.meta.arg;
        if (status === 200) {
          state.data = data;
          localStorage.setItem('jwtToken', state?.data?.token);
          state.refresh = !state.refresh
          navigate('/')
        } else {
           toast.error(data?.error)
        }
        state.loading = false;
      })
      .addCase(action.getCurrentProfile.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.authUser = data;
       
        } else {
          state.errors = data.error;
        }
        state.loading = false;
      })

      .addCase(action.signOut.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        const { navigate } = action.meta.arg;
        if (status === 200) {
            state.data = null
            state.following = null
            state.suggestedUsers = null
            state.notifications = null
            state.authUser = null
            localStorage.removeItem('jwtToken')
            toast.success(data.message)
            navigate('/login')
        }
      })
      .addCase(action.editProfile.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          toast.success(data?.message)
          state.refresh = !state.refresh
        }else{
          toast.error(data?.error)
        }
      })
      .addCase(action.followUnfollowUser.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          toast.success(data?.message)
          state.refresh = !state.refresh
        }
      })
      .addCase(action.getUserProfile.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.data = data;
    
        }
      })
      .addCase(action.suggestedProfile.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.suggestedUsers = data;
        }
        state.loading = false
      })
      .addCase(action.getFollowers.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.following = data;
        }
        state.loading = false
      })
      .addCase(action.getNotifications.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
          state.notifications = data;
        }
        state.loading = false
      })

      .addCase(action.deleteNotifications.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        if (status === 200) {
         state.notifications = null;
          toast.success(data?.message)
        }
        state.loading = false
      })
  },

});

export default currentProfileSlicer.reducer;
