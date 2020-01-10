import FetchApi from '../../helpers/fetchApi';

export const getCompanies = () => async dispatch =>  {
    try{
        const response = await FetchApi.get(true, `${process.env.REACT_APP_API_URL}/companies`)
        dispatch({
            type: 'GET_COMPANIES',
            data: response,
        })
    }catch(e){
        dispatch({
            type: 'GET_COMPANIES_ERROR',
            data: e,
        })
    }
}

