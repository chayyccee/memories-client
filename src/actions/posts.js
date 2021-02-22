import * as api from '../api';

// create actions more specifically, Action Creators(functions that return an action)

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message); 
    }
}