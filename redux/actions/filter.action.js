import { FILTER, FILTER_UNIVERSITIES_SUCCESS } from '../types';
import axios from 'axios';

export const filter_universities = (selection) => async (dispatch) => {
  try {
    const res = await axios.get('/api/filter', {
      params: {
        deg_type: selection.degree,
        language: selection.language,
        region: selection.location,
        price1: selection.price !== null ? selection.price[0] : null,
        price2: selection.price !== null ? selection.price[1] : null,
      },
    });

    const data = await res.data;

    if (res.status === 200) {
      dispatch({
        type: FILTER_UNIVERSITIES_SUCCESS,
        payload: data,
      });
      return true;
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
