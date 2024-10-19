import * as url from "../urls";
import axios from "axios";
axios.defaults.withCredentials = true;

export const newTweet = (data) => {
  return axios
    .post(url.NEW_TWEET, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const deleteTweet = (tweetId) => {
  return axios
    .delete(`${url.DELETE_TWEET}/${tweetId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const likeTweet = (tweetId) => {
  return axios
    .get(`${url.LIKE_TWEET}/${tweetId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const commentTweet = ({pid,text}) => {
  return axios
    .post(`${url.COMMENT_TWEET}/${pid}`,{text})
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getTweets = async () => {
  return await axios
    .get(url.GET_ALL_TWEETS)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getFollowingTweets = () => {
  return axios
    .get(url.GET_FOLLOWING_TWEETS)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getLikeTweet= (userId) => {
  return axios
    .get(`${url.GET_LIKE_TWEET}/${userId}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getProfileTweets = (username) => {
  return axios
    .get(`${url.GET_PROFILE_TWEETS}/${username}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};