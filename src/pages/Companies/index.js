import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCompanies } from './actions';
import { SingleCompanie } from '../../components';
import { LinkBlock } from '../../helpers/styles';
import { logout } from '../../store/Routers/action';
import * as S from './Companies.styles';

export const Companies = () => {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(getCompanies());
  }, []);

  const companiesState = useSelector((state) => state.companies);
  
  const { companies, error } = companiesState;

  const logOut = () => {
    dispatch(logout())
  }

  return (
      <>
        <LinkBlock to='/profile'>Go to Profile</LinkBlock>
        <S.Logout onClick={logOut}>Log out</S.Logout>
        <S.Conatiner>
          <S.Header>Companies</S.Header>
            <S.FlexWrapper>
            {companies && companies.map(el=> (
                <SingleCompanie 
                    key={el.id}
                    elem={el}/>
            ))}
            </S.FlexWrapper>
            {error && <div>{error}</div>}
        </S.Conatiner>
      </>      
  )
}

