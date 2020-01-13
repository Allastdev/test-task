import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as S from './Login.styles';


import { loggedIn } from './actions';
import { validator } from '../../helpers/validator';
import { localStorageSet, localStorageGet } from '../../helpers/localStorage';


export const Login = (props) => {
  const dispatch = useDispatch();

  const loginState = useSelector( state => state.login);
  console.log('errorMessage', loginState.errorMessage);
  
  const handleValidate = (values) => {
    const {
      isEmailValid,
      isPasswordValid,
      errors,
    } = validator;

    isEmailValid(values.email);
    isPasswordValid(values.password);
    return errors;
  };

  const handleSubmit = (values) => {
    dispatch(loggedIn(values));
  };
  
  return (
    <S.Contained>
      <h2>Login</h2>
      <S.Form
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{ email: '', password: '' }}
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
            <S.SignIn
              value='Sign In'
              type='submit'
            />
            Haven't registered yet?
            <Link to='/registration'>Sign up</Link>
          </S.SimpleForm>
        )}
      </S.Form>
        {loginState.errorMessage && <S.ErrorMessage>{loginState.errorMessage}</S.ErrorMessage>}
    </S.Contained>
  );
};
