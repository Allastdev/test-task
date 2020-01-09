import FetchApi from '../../helpers/fetchApi';

export const loggedIn = (values) => async dispatch =>  {
    try{    
        const response = await FetchApi.post('http://10.0.13.6:3000/auth/login', {
            email: values.email,
            password: values.password,
        })
        console.log('response', response);
        localStorage.setItem('access_token', response.access_token);
        dispatch({
            type: 'ROUTERS_RENDER',
            value: true,
          });
    }catch(e){
        console.log(e.message);
        dispatch({
            type: 'LOGGED_IN_ERROR',
            data: e.message,
        })
    }
}