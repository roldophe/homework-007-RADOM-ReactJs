import axios from "axios"
import { base_URL } from "../../utils/constant"
import { actionTypes } from "./actionTypes"

export const fetchProfile = (auth) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${base_URL}auth/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
      });

      if (response.status === 200) {
        dispatch({
          type: actionTypes.FETCH_PROFILE,
          payload: response.data,
        });
      }
      return Promise.resolve();
    } catch (error) {
      // Handle error
      console.error("Error fetching profile:", error);
      return Promise.reject(error);
    }
  };
};