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
  const { companies } = companiesState;

  return (
      <>
        <LinkBlock to='/profile'>Go to Profile</LinkBlock>
        <div onClick={() => dispatch(logout())}>Log out</div>
          <S.FlexWrapper>
          {companies && companies.map(el=> (
              <SingleCompanie to={`/companies/${el.id}`}
                  key={el.id}
                  name={el.name}
                  address={el.address}/>
          ))}
          </S.FlexWrapper>
      </>
  )
}

