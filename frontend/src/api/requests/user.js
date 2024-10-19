import axios from "axios";
import * as url from "../urls";

export const getProfileByUsername = async (username) => {
  return axios
    .get(`${url.GET_PROFILE_USERNAME}/${username}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const followByUserid = async (userid) => {
  return axios
    .get(`${url.FOLLOW_ID}/${userid}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};
export const updateProfile = async (formData) => {
  return axios
    .put(url.UPDATE_PROFILE, formData)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getSuggestedUsers = async () => {
  return axios
    .get(url.GET_SUGGEST_USERS)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};


export const getFollowers = async (userid) => {
  return axios
    .get(`${url.GET_FOLLOWER}/${userid}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
}

export const getNotifications = async () => {
  return axios
    .get(url.GET_NOTIFICATION)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
}

export const deleteNotifications = async () => {
  return axios
    .delete(`${url.DELETE_NOTIFICATION}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
}