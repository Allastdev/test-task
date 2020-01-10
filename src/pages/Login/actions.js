import FetchApi from '../../helpers/fetchApi';

export const loggedIn = (values) => async dispatch =>  {
    console.log('API_rool', process.env)
    try{    
        const response = await FetchApi.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
            email: values.email,
            password: values.password,
        })

        localStorage.setItem('access_token', response.access_token);

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