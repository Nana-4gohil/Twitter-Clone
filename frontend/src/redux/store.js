import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import tweetSlicer from "./slicers/tweetSlicer";
import currentProfileSlicer from "../redux/slicers/currentProfileSlicer";
import tweetSlicer  from "../redux/slicers/tweetSlicer";

export default configureStore({
    reducer: {
     currentProfile: currentProfileSlicer,
     tweet: tweetSlicer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });