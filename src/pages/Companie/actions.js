import FetchApi from '../../helpers/fetchApi';

export const getCompanie = (id) => async dispatch =>  {
    try{    
        const response = await FetchApi.get(`http://10.0.13.6:3000/companies/${id}`)
        dispatch({
            type: 'GET_SINGLE_COMPANIE',
            data: response,
        })
    }catch(e){
        console.log(e.message);
    }
}

export const addReview = (id, score, review) => async dispatch => {
    try{
        await FetchApi.post('http://10.0.13.6:3000/reviews', {
            companyId: id, 
            score, 
            review_txt: review
        })
        dispatch({
            type: 'GET_SINGLE_COMPANIE_ERROR',
            data: 'Your review has successfully published',
        })
    }catch(e){
        dispatch({
            type: 'GET_SINGLE_COMPANIE_ERROR',
            data: e.message,
        })
        console.log(e.message);
    }
}
