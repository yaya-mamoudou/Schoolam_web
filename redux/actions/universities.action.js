import { LOAD_UNIVERSITIES_SUCCESS, LOAD_UNIVERSITIES_FAIL } from '../types';
import axios from 'axios';

export const load_universities = (option) => async (dispatch) => {
  try {
    const res = await axios.get('/api/universities');

    const data = await res.data;

    if (res.status === 200) {
      dispatch({
        type: LOAD_UNIVERSITIES_SUCCESS,
        payload: data.universities,
      });
    } else {
      dispatch({
        type: LOAD_UNIVERSITIES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOAD_UNIVERSITIES_FAIL,
    });
  }
};
