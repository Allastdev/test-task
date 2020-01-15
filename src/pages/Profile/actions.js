import FetchApi from '../../helpers/fetchApi';

export const getProfile = () => async dispatch =>  {
    try{    
        const response = await FetchApi.get(true, `${process.env.REACT_APP_API_URL}/users/profile`,)
        dispatch({
            type: 'GET_PROFILE',
            data: response,
        })
    }catch(e){
        dispatch({
          type: 'GET_PROFILE_ERROR',
          data: e,
        })
    }
}

export const editUserInfo = (values) => async dispatch => {
    try{
      await FetchApi.put(`${process.env.REACT_APP_API_URL}/users/profile`, {
        nickname: values.username,
        password: values.password, 
        email: values.email,
      });
     dispatch({
       type: 'USER_CREDENTIALS',
     })
   }catch(e){
    dispatch({
      type: 'USER_CREDENTIALS_ERROR',
      data: e
    })
   }
  }
  