
import * as url from "../urls";
import axios from "axios";

export const signup = async (data) => {
  return axios
    .post(url.SIGN_UP, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};
export const signin = async (data) => {
    return axios
      .post(url.SIGN_IN, data)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.response;
      });
  };

export const signout = async () => {
  return axios
    .get(url.SIGN_OUT)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getCurrentProfile = async () => {
  return axios
    .get(`${url.GET_ME}`)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};