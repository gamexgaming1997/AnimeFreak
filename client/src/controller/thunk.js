import * as API from '../api/api.js';

export const get_mal_id_from_API = (mal_id) => async (dispatch) => {
    try {
        const { data } = await API.findById(mal_id);
        dispatch({ type: 'FETCH_API', payload: data });
    } catch (error) {
        console.log(error);
    }
}
