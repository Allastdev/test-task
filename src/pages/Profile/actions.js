import FetchApi from '../../helpers/fetchApi';

export const getProfile = () => async dispatch =>  {
    try{    
        const response = await FetchApi.get('http://10.0.13.6:3000/users/profile')
        dispatch({
            type: 'GET_PROFILE',
            data: response,
        })
        console.log('response', response);
    }catch(e){
        console.log(e.message);
    }
}

export const editUserInfo = (values) => async dispatch => {
    try{
      const response = await FetchApi.put('http://10.0.13.6:3000/users/profile', {
        nickname: values.username,
        password: values.password, 
        email: values.email,
      });
      console.log('response', response);
     dispatch({
       type: 'USER_CREDENTIALS',
     })
   }catch(e){
     console.log(e);
   }
  }
  