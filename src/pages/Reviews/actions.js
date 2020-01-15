import FetchApi from '../../helpers/fetchApi';

export const getReviews = () => async dispatch =>  {
    try{    
        const response = await FetchApi.get(true, `${process.env.REACT_APP_API_URL}/reviews`)
        dispatch({
            type: 'GET_REVIEWS',
            data: response,
        })
        console.log('response', response);
    }catch(e){
        dispatch({
            type: 'GET_REVIEWS_ERROR',
            data: e,
        })
    }
}