import FetchApi from '../../helpers/fetchApi';

export const getCompanie = (id) => async dispatch =>  {
    try{    
        const response = await FetchApi.get(true, `${process.env.REACT_APP_API_URL}/companies/${id}`)
        dispatch({
            type: 'GET_SINGLE_COMPANIE',
            data: response,
        })
    }catch(e){
        dispatch({
            type: 'GET_SINGLE_COMPANIE_ERROR',
            data: e,
        })
    }
}

export const addReview = (id, score, review) => async dispatch => {
    try{
      await FetchApi.post(true, `${process.env.REACT_APP_API_URL}/reviews`, {
            companyId: id, 
            score, 
            review_txt: review
        })
        dispatch({
            type: 'ADD_REVIEW',
            data: 'Your review has successfully published',
        })
    }catch(e){
        dispatch({
            type: 'ADD_REVIEW_ERROR',
            data: e,
        })
    }
}
