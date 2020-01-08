import FetchApi from '../../helpers/fetchApi';

export const getCategories = () => async dispatch =>{
    try{
      const response = await FetchApi.get('http://10.0.13.6:3000/categories');
      dispatch({
          type: 'GET_CATEGORIES',
          data: response
      })
    }catch(e){
      dispatch({
          type: 'GET_CATEGORIES',
          data: e.messages,
      })
    }
  }