import React from 'react';
import { logout } from '../../store/Routers/action';
import { LinkBlock } from '../../helpers/styles';
import { useDispatch } from 'react-redux';

export const Reviews = () => {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout())
      }

    return(
        <>
          <LinkBlock to='/' onClick={logOut}>Log Out</LinkBlock>
          <h1>Reviews page</h1>
        </>
    )
}