import FetchApi from '../../helpers/fetchApi';

export const sighnUpUser = (values) => async dispatch => {
  console.log('values', values);
  try{
    const response = await FetchApi.post('http://10.0.13.6:3000/users', {
        email: values.email,
        password: values.password,
        username: values.username,
        role: values.role,
        company: values.role === 'company' ?  {
          company_name: values.company_name,
          company_address: values.company_address,
          categories_id: values.categories_id,
          products_id: values.products_id,
        } : null
    });
    console.log('response', response);

    dispatch({
        type: 'SIGN_UP_USER',
        data: response.message, 
    })
  }catch(e){
    dispatch({
        type: 'SIGN_UP_USER_ERROR_MESSAGE',
        data: e.messages,
    })
  }
}



