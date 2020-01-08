import React from 'react';

import * as S from './SingleCompanie.styles';

export const SingleCompanie = (props) => {
    return(
        <S.Item to={props.to}>
          <h1>{props.name}</h1>
          <p>{props.address}</p>
        </S.Item>
    )
}