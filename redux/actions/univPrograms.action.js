import { LOAD_PROGRAMS_SUCCESS, LOAD_PROGRAMS_FAIL, CLEAR_PROGRAMS } from '../types';
import axios from 'axios';

export const load_programs = (univ_id) => async (dispatch) => {
  try {
    const res = await axios.get('/api/programs', { params: { id: univ_id } });

    const data = await res.data;

    if (res.status === 200) {
      dispatch({
        type: LOAD_PROGRAMS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: LOAD_PROGRAMS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOAD_PROGRAMS_FAIL,
    });
  }
};

export const clear_programs = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_PROGRAMS,
    });
  } catch (error) {
    console.log(error);
  }
};
