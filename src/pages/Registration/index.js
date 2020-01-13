import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as S from './Registration.styles';
import { signUpUser,  } from './actions';
import { getCategories } from '../../store/Categories/actions';
import { getProducts } from '../../store/Products/actions';
import { validator } from '../../helpers/validator';


export const Registration = (props) => {
  const dispatch = useDispatch();
  const categoriesState = useSelector(state => state.categories);
  const productsState = useSelector(state => state.products);
  const registrationState = useSelector(state => state.registration);
  const { errorMessage } = registrationState;
  

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  const handleValidate = (values) => {
    const { 
      isEmailValid,
      isPasswordValid,
      isUsername,
      errors
    } = validator;

    isEmailValid(values.email);
    isPasswordValid(values.password);
    isUsername(values.username);
    return errors;
  }
 
  const handleSubmit = (values) => {
    if(values.role === 'user'){
      dispatch(signUpUser(values));
    }else if(values.role === 'company'){
      dispatch(signUpUser(values));
    }
    const { history } = props;
    errorMessage.length > 0 ?  history.push('/') : history.push('/login');
  }

  return(
    <S.Contained>
      <h2>Registration</h2>
      <div>{ errorMessage }</div>
      <S.Form
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          email: '',
          password: '', 
          username: '', 
          role: '', 
          company: {
            company_name: '', 
            company_address: '', 
            categories_id: '', 
            products_id: ''
          }
          }}
        validate={(values) => handleValidate(values)}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <S.SimpleForm onSubmit={handleSubmit}>
              <S.Input
              placeholder='Username'
              name='username'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              errBorder={errors.username}
            />
            {errors.username && <S.Error>{errors.username}</S.Error>}
            <S.Input
              placeholder='Email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errBorder={errors.email}
            />
            {errors.email && <S.Error>{errors.email}</S.Error>}
            <S.Input
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              errBorder={errors.password}
            />
             {errors.password && <S.Error>{errors.password}</S.Error>}
            <S.Select onChange={handleChange} name='role'>
                <option>Please choose role</option>
                <option value='user'>User</option>
                <option value='company'>Company</option>
            </S.Select>
            {values.role === 'company' ? <>
                <S.Input
                  placeholder='Company Name'
                  type='text'
                  name='company_name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.company.company_name}
                  errBorder={errors.company_name}
                />  
                 <S.Input
                  placeholder='Address'
                  type='text'
                  name='company_address'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.company.company_address}
                  errBorder={errors.company_address}
                />  
                <S.Select onChange={handleChange} name='categories_id' value={values.company.categories_id}>
                  <option>Please choose categories</option>
                  {categoriesState.categories && categoriesState.categories.map(el => (
                    <option key={el.id} value={el.id}>{el.name}</option>
                  ))}
                </S.Select>
              
                <S.Select onChange={handleChange} name='products_id' value={values.company.products_id}>
                  <option>Please choose products</option>
                  {productsState.products && productsState.products.map(el => (
                    <option key={el.id} value={el.id}>{el.name}</option>
                  ))}
                </S.Select>
             </>
                :
              null
            }
            {errors.type && <S.Error>{errors.type}</S.Error>}
            <S.SignIn
              value='Sign up'
              type='submit' 
            />
            Already registered? <Link to='/login'>Sign in</Link>
          </S.SimpleForm>
        )}
      </S.Form>
    </S.Contained> 
  )
}

