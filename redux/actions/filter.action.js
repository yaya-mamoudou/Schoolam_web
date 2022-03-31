import { FILTER } from "../types";
import axios from "axios";

export const filter_universities = (selection) => async (dispatch) => {
  try {
    console.log(selection);
    const res = await axios.get("/api/filter", {
      params: {
        deg_type: selection.degree,
        language: selection.language,
        location: selection.location,
      },
    });

    const data = await res.data;
    if (res.status === 200) {
      console.log(data);
      // dispatch({
      //   type: LOAD_UNIVERSITIES_SUCCESS,
      //   payload: data.universities,
      // });
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
