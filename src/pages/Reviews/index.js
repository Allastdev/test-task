import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../store/Routers/action';
import { LinkBlock } from '../../helpers/styles';

//actions
import {getReviews} from './actions';

export const Reviews = () => {
    const dispatch = useDispatch();

    const loginState = useSelector(state => state.login);
   
    const {user: {id}} = loginState;
    useEffect(() => {
      dispatch(getReviews());
    }, [])
    const logOut = () => {
        dispatch(logout())
      }
     
    return(
        <>
          <LinkBlock to='/' onClick={logOut}>Log Out</LinkBlock>
          <LinkBlock to='/profile'>Go to Profile</LinkBlock>
          <h1>Reviews page</h1>
        </>
    )
}
