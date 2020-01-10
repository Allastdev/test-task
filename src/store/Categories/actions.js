import FetchApi from '../../helpers/fetchApi';

export const getCategories = () => async dispatch =>{
    try{
      const response = await FetchApi.get(true, `${process.env.REACT_APP_API_URL}/categories`);
      dispatch({
          type: 'GET_CATEGORIES',
          data: response
      })
    }catch(e){
      dispatch({
          type: 'GET_CATEGORIES_ERROR',
          data: e,
      })
    }
  }