import FetchApi from '../../helpers/fetchApi';

export const getCompanies = () => async dispatch =>  {
    try{    
        const response = await FetchApi.get('http://10.0.13.6:3000/companies')
        dispatch({
            type: 'GET_COMPANIES',
            data: response,
        })
    }catch(e){
        console.log(e.message);
    }
}

