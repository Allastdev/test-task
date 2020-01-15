import FetchApi from '../../helpers/fetchApi';
import { localStorageSet } from '../../helpers/localStorage';

export const loggedIn = (values) => async dispatch =>  {
  try{    
      const response = await FetchApi.post(false, `${process.env.REACT_APP_API_URL}/auth/login`, {
          email: values.email,
          password: values.password,
      })
      console.log('log in response', response)
      localStorageSet('access_token', response.access_token, false);
      localStorageSet('role', response.role, false);
      dispatch({
        type: 'LOGGED_USER',
        data: response,
      })
      dispatch({
          type: 'ROUTERS_RENDER',
          value: true,
        });
  }catch(e){
      dispatch({
          type: 'LOGGED_IN_ERROR',
          data: e.message,
      })
  }
}