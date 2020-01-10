import FetchApi from '../../helpers/fetchApi';

export const signUpUser = (values, type) => async dispatch => {
  console.log('type', `${process.env.REACT_APP_API_URL}/${type}`);
  try{
    const response = await FetchApi.post(false, `${process.env.REACT_APP_API_URL}/${type}`);
    dispatch({ 
        type: 'SIGN_UP_USER', 
        data: response.message, 
    })
  }catch(e){
    dispatch({
        type: 'SIGN_UP_USER_ERROR',
        data: e,
    })
  }
}



