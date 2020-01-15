import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { validator } from '../../helpers/validator';

import { getProfile, editUserInfo } from './actions';
import { getCategories } from '../../store/Categories/actions';
import { getProducts } from '../../store/Products/actions';
import { LinkBlock } from '../../helpers/styles';

import * as S from '../../pages/Registration/Registration.styles';

export const Profile = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getProfile());
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  const userProfileState = useSelector(state => state.userProfile);
  const categoriesState = useSelector(state => state.categories);
  const productsState = useSelector(state => state.products);

  const { userProfile }  = userProfileState;

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
    dispatch(editUserInfo(values));
  }

  return(
      <>
        <LinkBlock to='/'>
            {userProfile.role === 'user' ? 'Go to Companies' : 'Go to reviews'}
        </LinkBlock>
        <S.Wrapper>
            <h1>You can edit your Profile info</h1>
            <S.Form
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                email: '', 
                password: '', 
                username: '', 
                role: '', 
                company_name: '', 
                company_address: '', 
                categories_id: '', 
                products_id: ''}}
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
                            onBlur={handleBlur}
                            value={userProfile.username}
                            onChange={handleChange}
                            errBorder={errors.username}
                        />
                        {errors.username && <S.Error>{errors.username}</S.Error>}
                        <S.Input
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={userProfile.email}
                            errBorder={errors.email}
                        />
                        {errors.email && <S.Error>{errors.email}</S.Error>}
                        <S.Input
                            placeholder='Password'
                            type='password'
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={userProfile.password}
                            errBorder={errors.password}
                        />
                        {errors.password && <S.Error>{errors.password}</S.Error>}
                    {userProfile.role === 'company' ? <>
                        <S.Input
                            placeholder='Company Name'
                            type='text'
                            name='company_name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={userProfile.company_name}
                            errBorder={errors.company_name}
                        />  
                        <S.Input
                            placeholder='Address'
                            type='text'
                            name='company_address'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={userProfile.company_address}
                            errBorder={errors.company_address}
                        />  
                        <S.Select onChange={handleChange} name='categories_id'>
                             <option>Please choose categories</option>
                        {categoriesState.categories && categoriesState.categories.map(el => (
                            <option 
                                key={el.id} 
                                value={el.id}>
                                    {el.name}
                            </option>
                        ))}
                        </S.Select>
                    
                        <S.Select onChange={handleChange} name='products_id'>
                             <option>Please choose products</option>
                            {productsState.products && productsState.products.map(el => (
                                <option 
                                  key={el.id} 
                                  value={el.id}>
                                    {el.name}
                                </option>
                            ))}
                        </S.Select>
                    </>
                        :
                    null
                    }
                    <S.SignIn
                        value='Save changes'
                        type='submit' 
                    />
                </S.SimpleForm>
                )}
            </S.Form>
        </S.Wrapper>
    </>
  )
}
