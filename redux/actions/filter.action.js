import { FILTER, FILTER_UNIVERSITIES_SUCCESS } from "../types";
import axios from "axios";

export const filter_universities = (selection) => async (dispatch) => {
  try {
    console.log(typeof selection.price[0]);
    const res = await axios.get("/api/filter", {
      params: {
        deg_type: selection.degree,
        language: selection.language,
        region: selection.location,
      },
    });

    const data = await res.data;
    if (res.status === 200) {
      console.log(data);
      dispatch({
        type: FILTER_UNIVERSITIES_SUCCESS,
        payload: data.searchResult,
      });
    } else {
      // dispatch({
      //   type: LOAD_UNIVERSITIES_FAIL,
      // });
    }
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: LOAD_UNIVERSITIES_FAIL,
    // });
  }
};
