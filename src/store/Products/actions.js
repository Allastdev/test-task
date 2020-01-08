import FetchApi from '../../helpers/fetchApi';

export const getProducts = () => async dispatch =>{
    try{
      const response = await FetchApi.get('http://10.0.13.6:3000/products');
      dispatch({
          type: 'GET_PRODUCTS',
          data: response
      })
    }catch(e){
      dispatch({
          type: 'GET_PRODUCTS',
          data: e.messages,
      })
    }
  }