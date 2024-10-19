//PROFILE AUTHENTICATION
export const SIGN_UP = `/api/v1/auth/signup`;
export const SIGN_OUT = `/api/v1/auth/logout`;
export const SIGN_IN = "/api/v1/auth/login";
export const GET_ME = "/api/v1/auth/me";
//EDIT PROFILE
export const UPDATE_PROFILE = "/api/v1/user/update";
export const GET_NOTIFICATION = "/api/v1/notifications"
export const DELETE_NOTIFICATION = "/api/v1/notifications"
// FOLLOW/UNFOLLOW
export const FOLLOW_ID = "/api/v1/user/follow";

// GET PROFILES

export const GET_PROFILE_USERNAME = "/api/v1/user/profile";

export const GET_FOLLOWER = "/api/v1/user/getfollowing"


export const GET_SUGGEST_USERS = "/api/v1/user/suggested";

//  TWEET ENDPOINTS  //
// ------------------//
export const NEW_TWEET = `/api/v1/posts/create`;

// TWEET EDIT
// export const EDIT_TWEET = `${URL}/tweet/edit?id=`;
export const DELETE_TWEET = "/api/v1/posts";

//TWEET LIKE
export const LIKE_TWEET = "/api/v1/posts/like";

export const COMMENT_TWEET = "/api/v1/posts/comment";

// GET TWEET
export const GET_ALL_TWEETS = "/api/v1/posts/all";
export const GET_PROFILE_TWEETS = "/api/v1/posts/user";
export const GET_LIKE_TWEET = "/api/v1/posts/likes";
export const GET_FOLLOWING_TWEETS = "/api/v1/posts/following"