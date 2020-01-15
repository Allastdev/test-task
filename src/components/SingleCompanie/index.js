import React from 'react';

import * as S from './SingleCompanie.styles';

export const SingleCompanie = (props) => {
  const {elem: {name, address, id}} = props;

    return(
        <S.Item to={`/companies/${id}`}>
          <S.Heading>{name}</S.Heading>
          <p>{address}</p>
        </S.Item>
    )
}