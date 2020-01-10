import FetchApi from '../../helpers/fetchApi';

export const getProducts = () => async dispatch =>{
    try{
      const response = await FetchApi.get(true, `${process.env.REACT_APP_API_URL}/products`);
      dispatch({
          type: 'GET_PRODUCTS',
          data: response
      })
    }catch(e){
      dispatch({
          type: 'GET_PRODUCTS_ERROR',
          data: e,
      })
    }
  }