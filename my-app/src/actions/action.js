import { INSERT_USER } from "./actionType";
import * as api from '../api/user';

export const insertUsers = (userData) => async dispatch => {
    try {
        const { data } = await api.insertUsers(userData);
        console.log(data);
        dispatch({type: INSERT_USER, payload: data});
    } catch (error) {
        console.log(error);
    }
}