import FetchApi from '../../helpers/fetchApi';

export const signUpUser = (values) => async dispatch => {
  try{
    const response = await FetchApi.post(false, `${process.env.REACT_APP_API_URL}/users`, values);
   
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



